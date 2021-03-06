import styled from 'styled-components';



export const ContainerCardModal = styled.section`
        width:100%;
        padding:40px;
        background:white;
        @media (max-width:500px){
            padding:20px 10px;
        }
        .card-modal-inner{
            display:flex;
            @media (max-width:500px){
                flex-flow:column;
            }
            &__img{
                width:200px;
                img{
                    width: 200px;
                    height: 200px;
                    object-fit:contain;
                }
                @media (max-width:500px){
                    width:100%;  
                    text-align:center;  
                }
            }
            &__content{
                width:calc(100% - 200px);
                padding:0px 20px;
                h1{
                    line-height: 1.2;
                    margin-bottom:10px;
                    font-size:2rem;
                }
                h3{
                    font-size:2rem;
                }
                p{
                    font-size:1.6rem;
                    line-height:20px;
                    font-weight:100;
                    color:gray;
                    text-align:justify;
                }
                @media (max-width:500px){
                    width:100%;
                    text-align:center;
                }
            }
        }
`;