import React from 'react';
import Button from './Button';

function ButtonRow({ buttons}) {
    return (
        <tr>
            {buttons.map((button) => (
                <td key={button.id}>
                    <Button className={button.className}>
                        {button.value}
                    </Button>
                </td>
            ))}
        </tr>
    );
}

export default ButtonRow;
