import React, { Component, PropTypes } from 'react';

module.exports = function () {
  function Foo(props) {
    props.foo;
    return <div />;
  }

  Foo.propTypes = {
    foo: PropTypes.string.isRequired
  };
  return Foo;
}();
