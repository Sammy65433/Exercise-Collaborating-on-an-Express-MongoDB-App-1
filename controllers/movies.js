import express from "express";
import Movie from "../models/movie.js";

export const createMovie = async (req, res) => {
  try {
    res.status(201).json("your data");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllMovies = async (req, res) => {
  try {
    res.status(200).json("your data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    res.status(200).json("your data");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    res.status(200).json("your data");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    res.status(200).json({ message: "Product successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


