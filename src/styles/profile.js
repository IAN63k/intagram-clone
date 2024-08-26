import styled from "styled-components";
import Profile from "../components/profile/Profile";

const Header = styled.div`
    position: relative;
    background-color: #f9f9f9;
    width: 100%;

    nav {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    background-color: #1b1b1b;

        ul{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            li {
                list-style: none;
                span {
                    color: #fff;
                    font-size: 1.7rem;
                    cursor: pointer;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-align: center;
                }

                svg{
                    color: #fff;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
            }
        }

    }

    figure {
        width: 100%;
        height: 200px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    
`;

const ProfileInfo = styled.div`
    position: relative;
    top: -30px;
    display: flex;
    align-items: center;
    gap: 4px;
    flex-direction: column;
    width: 100%;
    max-width: 100px;

    figure {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid red;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        height: 25px;
        max-height: 60px;
    }
    p {
        font-size: 0.9rem;
        color: #666;
        max-height: 80px;
        height: 40px;
        text-align: center;
        overflow-y  : Scroll;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    margin: 0;
    padding: 0;
    `;


const SectionInfo = styled.section`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
        background-color: #ffece8;
        flex-wrap: nowrap;
        width: 100%;

        .div__actions-acount {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            flex-direction: row;
            width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;
            margin-bottom: 1rem;
        }
            

        button {
            all: unset;
            background-color: #ef6361;
            color: #fff;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            width: 100%;
            text-align: center;
            border: 1px solid #ef6361;
            transition: all 0.3s ease;
        
            &:hover {
                background-color: #fff;
                color: #ef6361;
                border: 1px solid #ef6361;
                transition: all 0.3s ease;
        }
    }
`;

const ContainerInfo = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    flex-direction: row;
    width: 100%;

    .div-data{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        flex-direction: column;
        width: 100%;
        h3 {
            font-size: 1.2rem;
            font-weight: 500;
        }
        p {
            font-size: 0.9rem;
            color: #666;
        }
    }


`;

const SectionPhotos = styled.section`
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    background-color: #fff;
    height: 100%;
    min-height: 45vh;
    border-radius: 20px 20px;
    padding: 1rem;


    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        padding: 4px;
        width: 80px;
        border-bottom: 1px solid #ef6361;
    }

    div{
        display: grid;
        justify-content: flex-start;
        align-items: center;
        grid-template-columns: auto auto;
        gap: .7rem;
        width: 100%;
        padding: 1rem 5px;
        
        figure {
            width: 100%;
            max-height: 500px;
            min-height: 100px;
            border-radius: 14px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 0.3s ease;

            &:hover {
                cursor: pointer;
                transform: scale(1.1);
                transition: all 0.3s ease;
                }
            }
        }
    
    }
`;


export {
    Header,
    ProfileInfo,
    Container,
    SectionInfo,
    ContainerInfo,
    SectionPhotos
}