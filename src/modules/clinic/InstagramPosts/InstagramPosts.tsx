import React from 'react';
import EditableImage from '../../../components/clinic/EditableImage/EditableImage';
import styles from './InstagramPosts.module.css';

interface InstagramPost {
  imageUrl: string;
  likes: number;
  comments: number;
}

interface InstagramPostsProps {
  isEditing: boolean;
}

const InstagramPosts: React.FC<InstagramPostsProps> = ({ isEditing }) => {
  const [posts, setPosts] = React.useState<InstagramPost[]>([
    { imageUrl: '/path-to-image1.jpg', likes: 123, comments: 45 },
    { imageUrl: '/path-to-image2.jpg', likes: 98, comments: 32 },
    { imageUrl: '/path-to-image3.jpg', likes: 156, comments: 67 },
  ]);

  return (
    <div className={styles.instagramPosts}>
      <h2>Instagram Posts</h2>
      <div className={styles.postGrid}>
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <EditableImage isEditing={isEditing} src={post.imageUrl} alt={`Instagram post ${index + 1}`} />
            <div className={styles.postStats}>
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.followButton}>Follow</button>
    </div>
  );
};

export default InstagramPosts;