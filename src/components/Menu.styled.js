import styled from 'styled-components'

export const StyledContainer = styled.div`
  position: fixed;
`

export const StyledMenu = styled.section`
  position: absolute;
  top: 0;
  z-index: 9999;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0, 0.9);
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ open }) =>
    open ? 'all 0.5s ease 0s' : 'all 0.5s ease 0s;'};
  transform:  ${({ open }) =>
    open ? 'translate3d(0px, 0px, 0px);' : 'translate3d(0, -100%, 0px);'}; 
}

  .menu_mobile {
    width: 100%;
    margin-top: 2rem;
    margin-right: auto;
    margin-left: auto;
  }

  .remove-icon-mobile {
    position: absolute;
    top: 3em;
    right: 4.75em;
    cursor: pointer;
    z-index: 999;
  }

  .menu_mobile ul {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #list li {
    padding: 20px 0;
    list-style: none;
    text-align: center;
    margin-bottom: 40px;
    display: inline-block;
    width: 100%;
    margin: 0;
  }

  #list a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    flex: 0 0 100%;
    font-size: 2em;
  }

  #list li a:hover {
    opacity: 0.6;
    font-weight: 600;
    text-decoration: none;
  }

  #list li .sub-menu {
    position: absolute;
    left: 100%;
    top: -30px;
    margin-top: 0;
  }

  #list li .sub-menu h3 {
    color: #525f7f;
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    margin-bottom: 30px;
  }

  #list li .sub-menu li a h4 {
    color: #525f7f;
    font-family: 'Roboto';
    font-size: 18px;
    line-height: 21px;
    margin: 0 0 5px;
  }

  #list li .sub-menu li a p {
    opacity: 0.94;
    color: #525f7f;
    font-family: 'Roboto';
    font-weight: lighter;
    font-size: 14px;
    line-height: 16px;
    margin: 0;
  }

  #list li .sub-menu {
    display: none;
  }

  #list li .open {
    display: block;
  }

  #list li .sub-menu li a {
    font-weight: 500;
  }

  #list li .sub-menu li a:hover {
    color: #525f7f;
    opacity: 0.6;
    font-weight: 500;
    text-decoration: none;
  }

  #list li ul li ul.sub-menu.move {
    transform: translateX(0%) !important;
  }

  span.return-level-1 {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 999;
  }

  #list {
    padding: 10em;
    overflow: visible;
    display: flex;
    flex-wrap: wrap
  }

  #list li {
    font-size: 3em;
    flex: 0 0 100%;
    text-align: left;
  }

  .menu_mobile ul {
    transform: translateX(0);
    transition: all 0.3s ease;
  }

  .menu_mobile .move {
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  #list li#social {
    width: 100%;
    margin-top: 50px;
  }

  #list {
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    #list li {
      float: none;
      width: 100%;
    }
    #list li:last-child {
      border: 0;
    }
    .menu-btn {
      right: 25px;
    }
  }
`
