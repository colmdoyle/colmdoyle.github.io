import React from 'react';
import styles from './TrackedAudio.module.scss';

type Props = {
    src: string,
    slug: string
};

const isBrowser = typeof window !== "undefined"

const TrackedAudio = ({ src, slug }: Props) => {
    const logPlay = (slug) => {
        if (isBrowser) {
            window.plausible ? window.plausible('audioPlay', { props: { slug } }) : console.warn(`plausible not initialized, would have logged ${slug}`);
        } else {
            console.log('window unavailable');
        }
    };
    return (
        <div className={styles['TrackedAudio']}>
            <audio controls src={src} preload="metadata" onPlay={logPlay(slug)}></audio>
        </div>
    )
};

export default TrackedAudio;