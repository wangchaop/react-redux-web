var React = require('react');
var {Link} = require('react-router');
var {Menu,Icon} = require('antd');
var SubMenu = Menu.SubMenu;
var IndexPage = React.createClass({
    render: function () {
        //<Menu.Item key="1"><Link to="/pjt"><span><Icon type="appstore" />项目主合同</span></Link></Menu.Item>
        return (
            <div className="container-fixed">
                <Menu theme="light" defaultOpenKeys={['sub_cloud']} style={{ width: 240 }} mode="inline">
                    <Menu.Item>发版时间：2016年07月18日</Menu.Item>
                    <Menu.Item key="HntCompact"><Link to="/HntCompact"><span><Icon type="appstore"/>混凝土合同</span></Link></Menu.Item>
                </Menu>
            </div>
        );
    }
});
module.exports = IndexPage;
