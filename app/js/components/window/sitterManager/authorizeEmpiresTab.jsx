'use strict';

var React                = require('react');
var _                    = require('lodash');

var EmpireRPCActions    = require('js/actions/rpc/empire');

var vex                  = require('js/vex');

var AuthorizeEmpiresTab = React.createClass({

    authorizeAllies : function() {
        vex.confirm(
            'Are you sure you want to authorize all members of your alliance?',
            _.partial(EmpireRPCActions.requestEmpireRPCAuthorizeSitters, { allied : true })
        );
    },

    authorizeAlliance : function() {
        var name = this.refs.alliance.value;

        vex.confirm(
            'Are you sure you want to authorize all members of ' + name + '?',
            _.partial(EmpireRPCActions.requestEmpireRPCAuthorizeSitters, { alliance : name })
        );
    },

    authorizeEmpire : function() {
        var name = this.refs.empire.value;

        vex.confirm(
            'Are you sure you want to authorize ' + name + '?',
            _.partial(EmpireRPCActions.requestEmpireRPCAuthorizeSitters, { empires : [name] })
        );
    },

    render : function() {
        return (
            <div style={{textAlign : 'center'}}>
                <div
                    className="ui green large labeled icon button"
                    onClick={this.authorizeAllies}
                >
                    <i className="warning sign icon"></i>
                    Authorize all Empires in current alliance
                </div>

                <h3>OR</h3>

                <div className="ui large fluid action input">
                    <input type="text" placeholder="Alliance name" ref="alliance" />
                    <div className="ui green button" onClick={this.authorizeAlliance}>
                        Authorize
                    </div>
                </div>

                <h3>OR</h3>

                <div className="ui large fluid action input">
                    <input type="text" placeholder="Empire name" ref="empire" />
                    <div className="ui green button" onClick={this.authorizeEmpire}>
                        Authorize
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AuthorizeEmpiresTab;
