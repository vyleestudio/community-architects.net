import { Arrow } from "./Symbols";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import React from "react";

export function PrimaryButton(props) {
  const className = 'action-primary' + (props.border ? ' border' : '') + (props.fullsize ? ' fullsize' : '') + (props.disabled ? ' disabled' : '') + (props.className ? ' ' + props.className : ''),
    Button = () =>
      <button tabIndex={0} aria-disabled={props.disabled ? true : undefined} title={props.disabled ? "Disabled" : undefined} className={className}>
        <span>{props.text}</span>
        {props.arrow ? props.disabled ? <Arrow className="disabled" /> : <Arrow /> : ''}
      </button>,
    LinkElement = () =>
      props.disabled ? <Button /> :
        props.ext === true ? <a tabIndex={-1} aria-label={props.text} href={props.destination} rel='noreferrer' target='_blank'><Button /></a> : <Link tabIndex={-1} aria-label={props.text} to={props.destination}><Button /></Link>
  return (
    <>
      <LinkElement />
    </>
  );
};

export function ContentBlock(props) {
  const className = 'contentblock ' + (props.r ? 'r' : 'l'),
    animationName = 'animate__fadeIn' + (props.r ? 'Left' : 'Right'),
    AnimationWrapper = (animationProps) =>
      <AnimationOnScroll offset={100} animateOnce={true} animateIn={animationName} duration={.5}>
        {animationProps.children}
      </AnimationOnScroll>,
    Section = () =>
      <section className={className}>{props.children}</section>;
  return (
    props.animate ? <AnimationWrapper><Section>{props.children}</Section></AnimationWrapper> : <Section>{props.children}</Section>
  )
}

export function ContentFullsizeBlock(props) {
  const AnimationWrapper = (animationProps) =>
    <AnimationOnScroll offset={100} animateOnce={true} animateIn={'animate__fadeInUp'} duration={.5}>
      {animationProps.children}
    </AnimationOnScroll>,
    Section = () =>
      <section className="contentfullsizeblock">{props.children}</section>;
  return (
    props.animate ? <AnimationWrapper><Section>{props.children}</Section></AnimationWrapper> : <Section>{props.children}</Section>
  )
}

export function Tag(props) {
  return (
    <span className={`tag ${props.color || ''}`}>{props.children}</span>
  )
}