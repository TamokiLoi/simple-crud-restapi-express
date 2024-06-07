import { Response } from "express";

// Type guard to check if an unknown value is an instance of Error
export const isError = (error: unknown): error is Error => {
    return error instanceof Error;
};

export const showError = (error: unknown, res: Response) => {
    return res.status(500).json({ message: isError(error) ? error.message : "Unknown error" });
};
