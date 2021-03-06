import styled from 'styled-components';



export const WrapperTitle = styled.section`
            width:100%;
`;

export const ContentTitle = styled.section.attrs(props =>({
            wrapperSize : props.themeSettings.general.wrapperSize,
            paddingDesktop : props.themeSettings.general.paddingDesktop,
            paddingMobile : props.themeSettings.general.paddingMobile,
            align : props.themeSettings.general.align,
            colors : props.themeSettings.general.colors
}))`
            max-width:${(props)=> props.wrapperSize};
            margin:auto;
            padding:${(props)=>props.paddingDesktop};
            .title-caja{
                padding:20px 0px;
                h3, p{
                    text-align:${(props)=>props.position ? props.position : props.align};
                    @media (max-width:500px){
                        text-align:left;
                    }
                }
                h3{
                    font-size:4rem;
                    letter-spacing:0px;
                    position:relative;
                    @media (max-width:500px){
                        font-size:3rem;
                        line-height:30px;
                    }
                }
                p{
                    color:${(props)=> props.colors.primary};
                    font-weight:300;
                    @media (max-width:500px){
                        line-height:30px;
                    }
                }
            }
            ${(props)=> props.alt && `
                h3,p{
                    @media (max-width:500px){
                        text-align:center!important;
                    }
                }
            `}
            @media (max-width:${(props)=> props.wrapperSize}){
                padding:${(props)=>props.paddingMobile};
            }
`;