import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".button {\r\n  padding: 10px 20px;\r\n  font-size: 16px;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button.primary {\r\n  background-color: #007bff;\r\n}\r\n\r\n.button.secondary {\r\n  background-color: #6c757d;\r\n}\r\n\r\n.button.danger {\r\n  background-color: #dc3545;\r\n}\r\n";
styleInject(css_248z$5);

// src/Button.js

const Button = ({
  children,
  onClick,
  variant = 'primary'
}) => {
  return /*#__PURE__*/React.createElement("button", {
    className: `button ${variant}`,
    onClick: onClick
  }, children);
};

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var css_248z$4 = ".my-ui-input {\r\n    padding: 10px 14px;\r\n    font-size: 16px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 6px;\r\n    outline: none;\r\n    transition: border-color 0.3s ease;\r\n  }\r\n  \r\n  .my-ui-input:focus {\r\n    border-color: #007bff;\r\n  }\r\n  ";
styleInject(css_248z$4);

const Input = ({
  type = 'text',
  placeholder = 'Enter text',
  value,
  onChange,
  ...rest
}) => {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    className: "my-ui-input"
  }, rest));
};

var css_248z$3 = "/* Login.css */\r\n\r\n.login-form {\r\n    max-width: 300px;\r\n    margin: 20px auto;\r\n    padding: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  .login-heading {\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .login-input {\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    border: 1px solid #ccc;\r\n  }\r\n  \r\n  .login-button {\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  ";
styleInject(css_248z$3);

const Login = ({
  onLogin
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (onLogin) {
      onLogin({
        email,
        password
      });
    }
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "login-form"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "login-heading"
  }, "Login"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    className: "login-input"
  }), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true,
    className: "login-input"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "login-button"
  }, "Login"));
};

var css_248z$2 = ".heading {\r\n    font-family: 'Segoe UI', sans-serif;\r\n    font-weight: bold;\r\n    margin-bottom: 16px;\r\n  }\r\n  ";
styleInject(css_248z$2);

const Heading = ({
  level = 1,
  children
}) => {
  const Tag = `h${level}`;
  return /*#__PURE__*/React.createElement(Tag, {
    className: "heading"
  }, children);
};

var css_248z$1 = ".card {\r\n    padding: 20px;\r\n    background-color: #fff;\r\n    border: 1px solid #eee;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 5px rgba(0,0,0,0.05);\r\n    margin-bottom: 20px;\r\n  }\r\n  ";
styleInject(css_248z$1);

const Card = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, children);
};

var css_248z = "/* Grid.css */\r\n\r\n.grid-container {\r\n    display: grid;\r\n    gap: 16px;\r\n    width: 100%;\r\n    grid-template-columns: repeat(3, 1fr); /* Default to 3 columns */\r\n  }\r\n  \r\n  .grid-item {\r\n    background-color: #f4f4f4;\r\n    padding: 16px;\r\n    border-radius: 4px;\r\n    border: 1px solid #ccc;\r\n  }\r\n  ";
styleInject(css_248z);

const Grid = ({
  children,
  columns = 3,
  gap = '10px'
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "grid-container",
    style: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap
    }
  }, children);
};

export { Button, Card, Grid, Heading, Input, Login };
//# sourceMappingURL=index.es.js.map
