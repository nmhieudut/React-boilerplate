import {
  Box,
  Button,
  Flex,
  Stack,
  Tooltip,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import { navs } from 'constants/navbar'
import Hamburger from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { FaMoon, FaRegLightbulb } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  const wrapperRef = useRef<any>(null)
  const [showLinks, setShowLinks] = useState(false)
  const bg = useColorModeValue('white', 'gray.800')
  const { colorMode, toggleColorMode } = useColorMode()
  const borderColor = useColorModeValue(
    '1px solid rgba(229,231,235,1)',
    '1px solid rgb(31, 41, 55)'
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!wrapperRef.current.contains(event.target)) {
        setShowLinks(false)
      }
    }
    if (showLinks) {
      document.addEventListener('click', handleClickOutside)
    }
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [wrapperRef, showLinks])

  const Logo = () => {
    return (
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="opacity-60 duration-300 hover:opacity-100 transform hover:scale-110 transition"
        >
          <img src="/logo512.png" width={80} height={80} alt="logo" />
        </Link>
      </div>
    )
  }
  const MenuItem = ({ href, label }) => {
    return (
      <Link
        to={href}
        className="duration-500 transform hover:scale-110 hover:-translate-y-1 transition rounded-xl px-8 py-2"
      >
        {label}
      </Link>
    )
  }
  const MenuToggle = () => {
    return (
      <Box
        ref={wrapperRef}
        display={{ base: 'block', md: 'none' }}
        onClick={() => setShowLinks(!showLinks)}
      >
        <Hamburger toggled={showLinks} direction="left" />
      </Box>
    )
  }
  const NavBarContainer = ({ children }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        className="container"
      >
        {children}
      </Flex>
    )
  }
  return (
    <Box
      className="fixed top-0 left-0 z-50 w-full"
      bg={bg}
      borderBottom={borderColor}
    >
      <NavBarContainer>
        <Logo />
        <MenuToggle />
        <Box
          display={{ base: showLinks ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Stack
            py={2}
            align="center"
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
          >
            {navs.map((n, i) => (
              <MenuItem key={i} href={n.to} label={n.label} />
            ))}
            <Tooltip
              hasArrow
              placement="bottom-end"
              label={colorMode === 'light' ? 'Nền tối' : 'Nền sáng'}
            >
              <Button onClick={toggleColorMode}>
                <span>
                  {colorMode === 'light' ? <FaMoon /> : <FaRegLightbulb />}
                </span>
              </Button>
            </Tooltip>
          </Stack>
        </Box>
      </NavBarContainer>
    </Box>
  )
}
