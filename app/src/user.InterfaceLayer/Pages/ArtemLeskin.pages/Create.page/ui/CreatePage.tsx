//import cls from './CreatePage.module.css';
import React from "react";

interface CreatePageProps {
    className?: string;
}

const CreatePage: React.FC<CreatePageProps> = (props: CreatePageProps) => {
    const { className } = props;

    return (
        <div className={className}>
            CreatePage
        </div>
    );
};

export default CreatePage;