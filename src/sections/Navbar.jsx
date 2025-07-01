'use client';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuOverlayRef = useRef(null);
  const navItemsMobileRef = useRef([]);
  const navItemsDesktopRef = useRef([]);
  const navigate = useNavigate();

  const navItems = ['Inicio', 'Servicios', 'Proceso', 'Planes'];

  const openMenu = () => {
    gsap.set(menuOverlayRef.current, { display: 'flex' });
    gsap
      .timeline()
      .fromTo(
        menuOverlayRef.current,
        { y: '-100%' },
        { y: '0%', duration: 0.6, ease: 'power3.out' }
      )
      .from(
        navItemsMobileRef.current,
        {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          ease: 'power3.out',
          duration: 0.6,
        },
        '-=0.3'
      );
  };

  const closeMenu = () => {
    gsap
      .timeline()
      .to(menuOverlayRef.current, {
        y: '-100%',
        duration: 0.4,
        ease: 'power3.in',
        onComplete: () => gsap.set(menuOverlayRef.current, { display: 'none' }),
      });
  };

  const toggleMenu = () => {
    if (!isOpen) openMenu();
    else closeMenu();
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnter = (el) => {
    if (!el) return;
    gsap.to(el, {
      scale: 1.1,
      color: '#8533FF',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (el) => {
    if (!el) return;
    gsap.to(el, {
      scale: 1,
      color: '#ffffff',
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  const handleClick = (el) => {
    if (!el) return;
    gsap.fromTo(
      el,
      { scale: 0.9 },
      {
        scale: 1,
        duration: 0.2,
        ease: 'back.out(2)',
      }
    );
  };

  const handleNavigate = (text) => {
    if (text === 'Planes') {
      localStorage.setItem('billingMode', JSON.stringify(false));
      navigate('/planes');
    } else if (text === 'Inicio') {
      navigate('/');
    }
    setIsOpen(false);
    closeMenu();
  };

  return (
    <nav className='relative z-50 flex items-center justify-center'>
      <div className='flex items-center justify-between max-w-screen-xl mx-6 w-full py-6'>
        <img
          src='/icon-company.svg'
          className='w-[8rem] relative z-50'
          alt='Logo'
        />

        {/* Menú desktop */}
        <div className='hidden md:flex items-center text-white text-sm gap-5'>
          {navItems.map((text, i) => (
            <li
              key={text}
              ref={(el) => (navItemsDesktopRef.current[i] = el)}
              className='text-[16px] cursor-pointer list-none'
              onMouseEnter={() => handleMouseEnter(navItemsDesktopRef.current[i])}
              onMouseLeave={() => handleMouseLeave(navItemsDesktopRef.current[i])}
              onClick={() => {
                handleClick(navItemsDesktopRef.current[i]);
                handleNavigate(text);
              }}
            >
              <button className='bg-transparent border-none outline-none'>{text}</button>
            </li>
          ))}
        </div>

        {/* Botón menú hamburguesa */}
        <div
          onClick={toggleMenu}
          className='cursor-pointer z-50 w-10 h-10 bg-gradient-to-b from-[#6b697b] to-[#0b0825] flex items-center justify-center rounded-full md:hidden'
        >
          <div className='bg-[#0a0724] w-[2.35rem] h-[2.35rem] rounded-full flex items-center justify-center'>
            <img src='/hamburguesa.svg' alt='Menu' />
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      <div
        ref={menuOverlayRef}
        className='fixed top-0 left-0 w-full h-screen bg-[#0a0724] flex-col items-center justify-center text-white gap-8 hidden'
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        {navItems.map((text, i) => (
          <li
            key={text}
            ref={(el) => (navItemsMobileRef.current[i] = el)}
            className='text-xl font-light uppercase tracking-widest cursor-pointer list-none'
            onMouseEnter={() => handleMouseEnter(navItemsMobileRef.current[i])}
            onMouseLeave={() => handleMouseLeave(navItemsMobileRef.current[i])}
            onClick={() => {
              handleClick(navItemsMobileRef.current[i]);
              handleNavigate(text);
            }}
          >
            <button className='bg-transparent border-none outline-none'>{text}</button>
          </li>
        ))}
      </div>
    </nav>
  );
}
