//import cls from './ActorPage.module.css';
import React from "react";

interface ActorPageProps {
    className?: string;
}

const ActorPage: React.FC<ActorPageProps> = (props: ActorPageProps) => {
    const { className } = props;

    return (
        <div className={className}>
            ActorPage
        </div>
    );
};

export default ActorPage;