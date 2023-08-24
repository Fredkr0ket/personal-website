import { useColorModeValue } from "@chakra-ui/react"
import { css, keyframes } from "@emotion/css"
import React, { useEffect, useState } from "react"

interface Props {
  url: string
}

const GithubButton = (props: Props) => {
  const hoverColor = useColorModeValue('0,0,0,0.2', '255,255,255,0.2')
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 0) {
                setIsScrolled(true);
                setIsAtTop(false);
            } else {
                setIsScrolled(false);
                setIsAtTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const fadeOutAnimation = keyframes`
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
      }
    `;

    const fadeInAnimation = keyframes`
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
    ` ;
  const styles = {
    root: css`
      padding: 4px;
      transition-timing-function: ease-in-out;
      border-radius: 15px;
      &:hover{
        transition: 1s;
        border-radius: 25px;
        background-color: rgba(${hoverColor});
      }
    `,
    fadeOutText: css`
    animation: ${fadeOutAnimation} 1s forwards;
  `,
  fadeInText: css`
    animation: ${fadeInAnimation} 1s forwards;
  `,
  }
  const color = useColorModeValue('black', 'white')
  return (
    <a href={props.url} target="_blank" className={`${styles.root} ${isScrolled && styles.fadeOutText} ${isAtTop && styles.fadeInText}`}>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="40px" height="40px" fill={color}><path d="M 13.023438 12 A 1.0001 1.0001 0 0 0 12.050781 12.683594 C 10.808405 16.409695 10.704061 20.942886 10.789062 24.15625 C 7.8374839 27.43189 6 31.744776 6 36.5 C 6 46.705438 14.294562 55 24.5 55 L 37 55 C 42.625545 55 46.610874 53.955342 49.248047 51.853516 C 51.88522 49.751689 53 46.622948 53 43 C 53 36.99024 48.374932 31.130859 41.693359 31.130859 C 41.200519 31.130859 40.803222 31.329271 40.363281 31.445312 C 39.776738 31.218974 39.181421 30.995746 38.482422 31 L 24.121094 31 C 23.714907 31 23.39387 31.201363 23.027344 31.304688 C 22.682645 31.203249 22.382441 31 22 31 C 18.692267 31 15.887198 32.370465 13.96875 34.564453 C 12.050302 36.758442 11 39.747136 11 43 A 1.0001 1.0001 0 1 0 13 43 C 13 40.177864 13.911808 37.668121 15.474609 35.880859 C 16.652864 34.533376 18.30052 33.766205 20.171875 33.378906 C 19.413277 34.566528 18.977921 35.990062 18.865234 37.431641 C 18.745884 38.958472 18.950924 40.494073 19.597656 41.755859 C 20.244387 43.017646 21.487897 44.021484 23.068359 44.021484 C 24.609237 44.021484 25.804832 42.986985 26.400391 41.726562 C 26.995949 40.466141 27.166746 38.943284 27.037109 37.425781 C 26.907472 35.908278 26.471828 34.392085 25.667969 33.171875 C 25.623169 33.103875 25.543827 33.066218 25.496094 33 L 37.675781 33 C 37.607711 33.07713 37.498984 33.116887 37.435547 33.197266 C 36.4813 34.406355 35.991764 35.931533 35.863281 37.443359 C 35.734798 38.955186 35.960351 40.467032 36.607422 41.703125 C 37.254493 42.939218 38.468834 43.925781 40 43.925781 C 41.519169 43.925781 42.717179 42.921821 43.371094 41.679688 C 44.025008 40.437553 44.277013 38.913859 44.181641 37.386719 C 44.093351 35.972944 43.658492 34.570686 42.865234 33.392578 C 47.688734 34.064726 51 38.398726 51 43 C 51 46.234052 50.11478 48.605139 48.001953 50.289062 C 45.889126 51.972986 42.374455 53 37 53 L 24.5 53 C 15.375438 53 8 45.624562 8 36.5 C 8 32.114674 9.7178597 28.149361 12.507812 25.191406 A 1.0001 1.0001 0 0 0 12.779297 24.474609 C 12.688787 21.606257 12.88093 17.509223 13.783203 14.214844 C 18.270574 15.068322 22.135834 17.801026 24.3125 19.746094 A 1.0001 1.0001 0 0 0 24.978516 20 L 39.5 20 C 39.495 20 39.57466 20.011682 39.746094 20.013672 A 1.0001 1.0001 0 0 0 40.423828 19.757812 C 42.596525 17.813869 46.465363 15.074708 50.958984 14.216797 C 51.946836 17.82436 52.070821 22.401173 51.941406 25.251953 A 1.0001 1.0001 0 0 0 52.171875 25.9375 C 52.515487 26.349834 57.838163 32.598595 54.398438 40.714844 A 1.0003205 1.0003205 0 1 0 56.240234 41.496094 C 59.909391 32.838489 54.742314 25.981837 53.9375 24.978516 C 54.068547 21.771974 54.054341 16.747931 52.699219 12.683594 A 1.0001 1.0001 0 0 0 51.625 12.007812 C 46.265048 12.678192 41.990627 15.785647 39.458984 18 L 25.292969 18 C 22.761128 15.785762 18.48156 12.677371 13.123047 12.007812 A 1.0001 1.0001 0 0 0 13.023438 12 z M 23.019531 33.294922 C 23.375448 33.506155 23.699413 33.818176 23.998047 34.271484 C 24.555531 35.117712 24.939184 36.357956 25.044922 37.595703 C 25.15066 38.83345 24.972642 40.065078 24.591797 40.871094 C 24.210949 41.677109 23.801482 42.021484 23.068359 42.021484 C 22.255322 42.021484 21.789379 41.648401 21.376953 40.84375 C 20.964528 40.039099 20.763351 38.816309 20.859375 37.587891 C 20.955395 36.359472 21.34345 35.132465 21.925781 34.291016 C 22.247484 33.826166 22.612144 33.510873 23.019531 33.294922 z M 40.177734 33.466797 C 40.528521 33.682866 40.848122 33.941274 41.115234 34.294922 C 41.732793 35.112549 42.110044 36.302734 42.185547 37.511719 C 42.261047 38.720704 42.029179 39.935774 41.601562 40.748047 C 41.173946 41.56032 40.693331 41.925781 40 41.925781 C 39.261666 41.925781 38.791492 41.563548 38.378906 40.775391 C 37.966321 39.987233 37.75653 38.800454 37.857422 37.613281 C 37.958314 36.426108 38.362512 35.250708 39.005859 34.435547 C 39.337157 34.015772 39.722139 33.691926 40.177734 33.466797 z"/></svg>
    </a>
  )
}

export default GithubButton

const styles = {
  root: css`
  padding: 5px;
  transition-timing-function: ease-in-out;
  border-radius: 15px;
  &:hover{
  transition: 1s;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.2);
  }
  `
}