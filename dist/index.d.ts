/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Button
 * Desc tsx-react button
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import { ReactEventHandler } from 'react';
import './index.scss';
declare type Sizes = 'normal' | 'tiny' | 'small';
declare type Types = 'blue-white' | 'white-blue' | 'white-grey';
declare type Positions = 'fixed' | undefined;
interface ButtonProps {
    content?: string;
    className?: string;
    customClass?: string;
    handle?: ReactEventHandler<HTMLButtonElement>;
    size?: Sizes;
    type?: Types;
    position?: Positions;
    disabled: boolean;
    children?: JSX.Element;
    href?: string;
}
declare const Button: React.SFC<ButtonProps>;
export default Button;
