import { configure } from '@storybook/react';
import './base.css';

function loadStories() {
  require('../stories/Skeleton.story.tsx');
  require('../stories/Post.story.tsx');
}

configure(loadStories, module);
