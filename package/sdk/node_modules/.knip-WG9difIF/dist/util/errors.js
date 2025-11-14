import { ZodError } from 'zod';
import { fromZodError, isValidationError } from 'zod-validation-error';
export class ConfigurationError extends Error {
}
export class LoaderError extends Error {
}
export const isKnownError = (error) => error instanceof ConfigurationError || error instanceof LoaderError || error instanceof ZodError;
export const isDisplayReason = (error) => !isValidationError(error) && error.cause instanceof Error;
export const isConfigurationError = (error) => error instanceof ConfigurationError;
export const getKnownError = (error) => {
    if (error instanceof ZodError)
        return fromZodError(error);
    return error;
};
