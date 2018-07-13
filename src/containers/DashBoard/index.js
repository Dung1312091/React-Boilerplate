import React, { Component } from 'react';
import { Icon } from 'react-fa';
import { NavLink } from 'react-router-dom';
import Avartar from '../../components/Avartar';
import './style.css';
const listMenu = [
  {
    group: 'REPORT',
    menuItem: [
      {
        name: 'Filight Report',
        linkTo: '/a',
        icon: 'fighter-jet'
      },
      {
        name: 'Ground Performantce',
        linkTo: '/ab',
        icon: 'fighter-jet'
      },
      {
        name: 'EFB Bin',
        linkTo: '/abc',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'MANAGEMENT',
    menuItem: [
      {
        name: 'VIP Management',
        linkTo: '/abcd',
        icon: 'fighter-jet'
      },
      {
        name: 'NTL Management',
        linkTo: '/abcde',
        icon: 'fighter-jet'
      },
      {
        name: 'Airport Management',
        linkTo: '/abcdef',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Management',
        linkTo: '/abcdefg',
        icon: 'fighter-jet'
      },
      {
        name: 'Groups & Sites',
        linkTo: '/abcdefgh',
        icon: 'fighter-jet'
      },
      {
        name: 'Account Management',
        linkTo: '/abcdefghj',
        icon: 'fighter-jet'
      }
    ]
  },
  {
    group: 'UTILITIES',
    menuItem: [
      {
        name: 'MCC schedule',
        linkTo: '/abcdefghjk',
        icon: 'fighter-jet'
      },
      {
        name: 'Aircraft Assiignment',
        linkTo: '/abcdefghjkm',
        icon: 'fighter-jet'
      }
    ]
  }
];
class DashBoard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      isCollapse: false,
      isAnimation: false,
      src: 'https://vegiagoc.com/Upload/images/Vietjets_cabin_crew_on_duty.jpg',
      isMobile: false
    };
  }
  handleCollapse = () => {
    this.setState(pre => ({
      isCollapse: !pre.isCollapse,
      isAnimation: true
    }));
  };
  handleClose = () => {
    this.setState({
      isCollapse: false
    });
  };
  renderGroupMenu = () => {
    return listMenu.map((gr, i) => {
      return (
        <React.Fragment key={i}>
          <li className="groupMenu">
            <span className="groupMenuText menuText">{gr.group}</span>
          </li>
          {this.renderMenu(gr.menuItem)}
        </React.Fragment>
      );
    });
  };
  renderMenu = (menuList, i) => {
    return menuList.map((e, i) => {
      return (
        <li key={i}>
          <NavLink
            to={e.linkTo}
            activeClassName="active"
            className="routerLink"
          >
            <Icon name={e.icon} className="icon" />
            <span className="menuText">{e.name}</span>
            {/* <Ink style={{ color: 'black' }} /> */}
          </NavLink>
        </li>
      );
    });
  };
  render() {
    const { isCollapse, isAnimation } = this.state;
    return (
      <div className="wrapper ">
        <div className={`leftSideBar ${isCollapse ? 'colapse' : ''}`}>
          <ul>
            <li style={{ marginBottom: 50 }} className="profile">
              <div>
                <Avartar
                  src={this.state.src}
                  handleClick={this.handleCollapse}
                />
                <div className="profileInfo">
                  <p className="menuText">Hello, Ngoc Trinh</p>
                  <p className="textProfile">Setting</p>
                </div>
              </div>
            </li>
            <li className="dashBoard">
              <div className="routerLink">
                <Icon name="slack" className="icon" />
                <span className="menuText">Dashboard</span>
                {/* <Ink style={{ color: 'black' }} /> */}
              </div>
            </li>
            {this.renderGroupMenu()}
          </ul>
        </div>
        <div className="rightCnt ">
          <div
            className={`overlay ${
              this.state.isCollapse ? 'overlay-transition' : ''
            }`}
            onClick={this.handleCollapse}
          />
          <div style={{ marginLeft: 50 }}>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-less normal distribution of letters, as
              opposed to using 'Content here, content here', making it look like
              readable English. Many desktop publishing packages and web page
              editors now use Lorem Ipsum as their default model text, and a
              search for 'lorem ipsum' will uncover many web sites still in
              their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and
              the like).It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
