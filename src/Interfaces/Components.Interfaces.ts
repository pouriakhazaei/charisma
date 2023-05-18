export interface InputProps {
    onChange: (value: string) => void;
};

export interface ListItemsProps {
    id: string | number;
    text: string;
};

export interface ProductsItemsProps {
    title: string;
    description: string;
};

export interface UserItemsProps {
    email: string;
    username: string;
};