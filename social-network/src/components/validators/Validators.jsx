export const required = value => value
    ? undefined
    : "Error: message must be not empty";
export const maxLength = length => value => value.length > length
    ? `Error: max message length is ${length} symbols`
    : undefined;








