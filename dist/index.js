import * as tslib_1 from "tslib";
/**
 * Created by maqing01<475986855@qq.com>.
 * ComponentName Button
 * Desc tsx-react button
 * GroupName tsx-react-ui
 */
import * as React from 'react';
import classNames from 'classnames';
import './index.scss';
const defaultProps = {
    className: '',
    customClass: '',
    handle: () => { console.log('handle action'); },
    size: 'normal',
    type: 'blue-white',
    disabled: false,
    href: ''
};
const Button = (_a) => {
    var { content, className, customClass, handle, size, type, position, disabled, children, href } = _a, others = tslib_1.__rest(_a, ["content", "className", "customClass", "handle", "size", "type", "position", "disabled", "children", "href"]);
    let defaultClass = classNames('lm-btn', `lm-btn-${type}`, size ? `lm-btn-${size}` : '', position ? `lm-btn-${position}` : '', className, customClass);
    // disabled === 'false' ? false : disabled;
    const template = href ?
        React.createElement("a", Object.assign({ className: defaultClass, href: href }, others),
            children ? content : content || '提交',
            " ",
            children)
        :
            React.createElement("button", Object.assign({ type: "button", className: defaultClass, disabled: disabled, onClick: handle }, others),
                children ? content : content || '提交',
                " ",
                children);
    return template;
};
Button.defaultProps = defaultProps;
export default Button;
//# sourceMappingURL=index.js.map