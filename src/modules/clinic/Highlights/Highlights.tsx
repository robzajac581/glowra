import React from 'react';
import EditableText from '../../../components/clinic/EditableText/EditableText';
import styles from './Highlights.module.css';

interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HighlightsProps {
  isEditing: boolean;
}

const Highlights: React.FC<HighlightsProps> = ({ isEditing }) => {
  const [highlights, setHighlights] = React.useState<Highlight[]>([
    { icon: '🌟', title: 'Excellent Patient Satisfaction', description: 'Your Journey to Confidence Starts Here. Experience the GlowUp Difference.' },
    { icon: '⏱️', title: 'Minimal Wait Times', description: 'Our streamlined appointment process ensures you get in and out quickly.' },
    { icon: '🔬', title: 'Advanced Techniques', description: 'Our approach leverages cutting-edge techniques to achieve your desired results.' },
    { icon: '👤', title: 'Personalized Approach', description: 'We understand that beauty is unique. That\'s why at Glowra, we prioritize a personalized approach.' },
  ]);

  return (
    <div className={styles.highlights}>
      <h2 className={styles.mainTitle}>Highlights</h2>
      <div className={styles.highlightGrid}>
        {highlights.map((highlight, index) => (
          <div key={index} className={styles.highlightCard}>
            <span className={styles.icon}>{highlight.icon}</span>
            <h3 className={styles.title}>
              <EditableText isEditing={isEditing} defaultText={highlight.title} />
            </h3>
            <p className={styles.description}>
              <EditableText isEditing={isEditing} defaultText={highlight.description} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;