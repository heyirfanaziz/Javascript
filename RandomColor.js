import{jsx as _jsx}from"react/jsx-runtime";import{useEffect,useState}from"react";import{addPropertyControls,ControlType}from"framer";/**
 * RANDOM COLOR
 *
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export default function RandomColor(props){const{colors,radius}=props;const[currentColor,setCurrentColor]=useState(colors[Math.floor(Math.random()*colors.length)]);useEffect(()=>{const onPageLoad=()=>{setCurrentColor(colors[Math.floor(Math.random()*colors.length)]);};if(document.readyState==="complete"){onPageLoad();}else{window.addEventListener("load",onPageLoad);return()=>window.removeEventListener("load",onPageLoad);}},[]);return /*#__PURE__*/ _jsx("div",{style:{width:"100%",height:"100%",backgroundColor:currentColor,borderRadius:radius}});};/* Default Properties */ RandomColor.defaultProps={radius:0,colors:["#09F","#85F","#FB0","#2DD","#F82"]};RandomColor.displayName="Random Color";/* Property Controls */ addPropertyControls(RandomColor,{radius:{type:ControlType.Number,min:0,max:100,step:1,displayStepper:true,defaultValue:0},colors:{type:ControlType.Array,control:{type:ControlType.Color}}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"RandomColor","slots":[],"annotations":{"framerIntrinsicWidth":"200","framerContractVersion":"1","framerIntrinsicHeight":"200","framerSupportedLayoutHeight":"fixed","framerSupportedLayoutWidth":"fixed","framerDisableUnlink":"*"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./RandomColor.map
