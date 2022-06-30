import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledIcon, SVG } from './Icon.styled'
import { ReactComponent as BackIcon } from './images/back.svg'
import { ReactComponent as CloseIcon } from './images/close.svg'
import { StyledMenu } from './Menu.styled'

export const FullscreenMenu = ({ data, position, colorIcon, header }) => {
  const [open, setOpen] = useState(false)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(t => {
      if (window.scrollY >= 100) {
        document.body.classList.remove('navigation--active')
      } else {
        document.body.classList.add('navigation--active')
      }
    })
  }, [])

  useEffect(() => {
    if (open) {
      document.body.classList.add('open--nav')
    } else {
      document.body.classList.remove('open--nav')
    }
  }, [open])

  useEffect(() => {
    document.body.classList.add('navigation--active')
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <MenuBurger
      open={open}
      setOpen={setOpen}
      position={position}
      colorIcon={colorIcon}
    >
      <Menu open={open} data={data} setOpen={setOpen}></Menu>
    </MenuBurger>
  )
}

function MenuBurger({ open, setOpen, children, position, colorIcon }) {
  const Icon = props => {
    return (
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <g
          id="HP"
          stroke="none"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="square"
        >
          <g transform="translate(-271.000000, -19.000000)" stroke={colorIcon}>
            <g id="Group" transform="translate(271.000000, 19.000000)">
              <line x1="0.444444444" y1="1.5" x2="32" y2="1" id="Line-4"></line>
              <line
                x1="0.444444444"
                y1="11.5"
                x2="32"
                y2="11"
                id="Line-4"
              ></line>
              <line
                x1="0.444444444"
                y1="22.5"
                x2="32"
                y2="22"
                id="Line-4"
                strokeWidth="3"
              ></line>
            </g>
          </g>
        </g>
      </SVG>
    )
  }
  return (
    <>
      <StyledIcon position={position} colorIcon={colorIcon}>
        <div className="navbar__container">
          <div className="navbar__logo">
            <Link to="/">
              <h3>IAMCAMDB</h3>
            </Link>
          </div>
          <span className="navbar-menu">
            <div
              className="menu-btn"
              open={open}
              onClick={() => setOpen(!open)}
            >
              <Icon
                fill="inherit"
                stroke={colorIcon}
                strokeWidth="2px"
                width="32px"
                height="23px"
                name="icon-home"
              />
            </div>
          </span>
        </div>
      </StyledIcon>
      {children}
    </>
  )
}

function Menu({ open, setOpen, data }) {
  const [sub, setSub] = useState(false)

  const [selectedItemMenu, toggleMenu] = useState(-1)

  function openSubMenu(index) {
    toggleMenu(selectedItemMenu === index ? -1 : index)
    setSub(!sub)
  }

  function returnToBack() {
    setOpen(false)
    setSub(false)
    toggleMenu(-1)
  }
  return (
    <StyledMenu open={open}>
      <div className="remove-icon-mobile" onClick={returnToBack}>
        <CloseIcon />
      </div>
      <div className="menu_mobile">
        <ul id="list" className={sub ? 'move' : ''}>
          {data.map((item, index) => (
            <a href={item.url} key={`item-${index}`}>
              {item.label}
              <li
                className={item.sub_menu ? 'item-level-1' : ''}
                onClick={() => {
                  openSubMenu(index)
                }}
              >
                <SubMenu
                  item={item}
                  selectedItemMenu={selectedItemMenu}
                  index={index}
                  setSub={setSub}
                ></SubMenu>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </StyledMenu>
  )
}

function SubMenu({ item, selectedItemMenu, index }) {
  return (
    <>
      {item.sub_menu && (
        <ul className={`sub-menu ${selectedItemMenu === index ? 'open' : ''}`}>
          <span className="return-level-1">
            <BackIcon />
          </span>
          <h3>{item.label}</h3>
          {item.sub_menu &&
            item.sub_menu.map((sub_item, i) => (
              <li key={i}>
                <a href={sub_item.url}>
                  <h4>{sub_item.label}</h4>
                  <p>{sub_item.sub_title}</p>
                </a>
              </li>
            ))}
        </ul>
      )}
    </>
  )
}
