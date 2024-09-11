import './Circle.css'
import * as React from "react";

interface Props {
    number: number,
    key?: number,
}

const Circle: React.FC<Props> = ({number}) => {
    return (
        <div className="circle">
            <span>{number}</span>
        </div>
    );
};

export default Circle;