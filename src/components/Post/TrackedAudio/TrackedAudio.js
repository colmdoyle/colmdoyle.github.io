import React from 'react';
import styles from './TrackedAudio.module.scss';

type Props = {
    src: string,
    slug: string
};

const TrackedAudio = ({ src, slug }: Props) => {
    const logPlay = (slug) => {
        window.plausible ? window.plausible('audioPlay', { props: { slug } }) : console.warn(`plausible not initialized, would have logged ${slug}`);
    };
    return (
        <div className={styles['TrackedAudio']}>
            <audio controls src={src} preload="metadata" onPlay={logPlay(slug)}></audio>
        </div>
    )
};

export default TrackedAudio;