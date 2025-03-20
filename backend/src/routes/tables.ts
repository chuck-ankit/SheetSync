import express from 'express';
import Table from '../models/Table';
import { auth } from '../middleware/auth';

const router = express.Router();

// Get all tables for the authenticated user
router.get('/', auth, async (req, res) => {
  try {
    const tables = await Table.find({ userId: req.user.userId });
    res.json(tables);
  } catch (error) {
    console.error('Error fetching tables:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new table
router.post('/', auth, async (req, res) => {
  try {
    const { name, columns } = req.body;
    const table = new Table({
      name,
      columns,
      userId: req.user.userId,
    });
    await table.save();
    res.status(201).json(table);
  } catch (error) {
    console.error('Error creating table:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a table
router.put('/:id', auth, async (req, res) => {
  try {
    const { name, columns } = req.body;
    const table = await Table.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { name, columns },
      { new: true }
    );
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }
    res.json(table);
  } catch (error) {
    console.error('Error updating table:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a table
router.delete('/:id', auth, async (req, res) => {
  try {
    const table = await Table.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!table) {
      return res.status(404).json({ message: 'Table not found' });
    }
    res.json({ message: 'Table deleted successfully' });
  } catch (error) {
    console.error('Error deleting table:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router; 