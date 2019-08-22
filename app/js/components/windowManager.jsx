'use strict';

var React                   = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Windows                 = require('js/components/windowManager/windows');

var WindowManager = React.createClass({

    render : function() {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                transitionAppear
            >
                <Windows />
            </ReactCSSTransitionGroup>
        );
    }
});

module.exports = WindowManager;
