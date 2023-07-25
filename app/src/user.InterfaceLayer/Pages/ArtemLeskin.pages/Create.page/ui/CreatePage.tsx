//import cls from './CreatePage.module.css';
import React from "react";
import Create from "user.InterfaceLayer/Components/ArtemLeskin.components.bll/Create.component.bll";

interface CreatePageProps {
    className?: string;
}

const CreatePage: React.FC<CreatePageProps> = (props: CreatePageProps) => {
    const { className } = props;

    return (
        <div className={className}>
            <Create/>
        </div>
    );
};

export default CreatePage;