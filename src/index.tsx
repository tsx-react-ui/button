/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Button
 * Desc tsx-react button
 * GroupName tsx-react-ui
 */
import * as React from 'react'
import { ReactEventHandler } from 'react'
import classNames from 'classnames';

import './index.scss';

interface ButtonProps {
    content: string;
    className?: string;
    customClass?: string;
    handle?: ReactEventHandler<HTMLButtonElement>;
    size?: string;
    type?: string;
    position?: string;
    disabled: boolean;
    children?: JSX.Element;
    href?: string;
}

const defaultProps: ButtonProps = {
    content: 'React test Button',
    className: '',
    customClass: '',
    handle: () => {console.log('handle action');},
    size: '',
    type: 'normal',
    position: '',
    disabled: false,
    href: ''
};

const Button: React.SFC<ButtonProps> = ({
    content,
    className,
    customClass,
    handle,
    size,
    type,
    position,
    disabled,
    children,
    href,
    ...others
}) => {
    let defaultClass = classNames('lm-btn', `lm-btn-${type}`, size ? `lm-btn-${size}` : '', position ? `lm-btn-${position}` : '', className, customClass);
    // disabled === 'false' ? false : disabled;

    const template = href ?
        <a className={defaultClass} href={href} data-disabled={disabled} {...others} >
            {children ? content : content || '提交'} {children}
        </a>
        :
        <button type="button" className={defaultClass} disabled={disabled} onClick={handle} {...others} >
            {children ? content : content || '提交'} {children}
        </button>

    return template;
};

Button.defaultProps = defaultProps;

export default Button;
