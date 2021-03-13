// Common
import { TypeInsightTopic, TypeInsightType } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Assets
import Article from '@static/svgs/type/article.inline.svg'
import WhitePaper from '@static/svgs/type/white-paper.inline.svg'
import EmailCourse from '@static/svgs/type/email-course.inline.svg'
import Event from '@static/svgs/type/event.inline.svg'
import Podcast from '@static/svgs/type/podcast.inline.svg'
import Publication from '@static/svgs/type/publication.inline.svg'
import Video from '@static/svgs/type/video.inline.svg'
import Webinar from '@static/svgs/type/webinar.inline.svg'

import DesignStrategy from '@static/svgs/topics/design-strategy.inline.svg'
import DesignSystems from '@static/svgs/topics/design-systems.inline.svg'
import Performance from '@static/svgs/topics/performance.inline.svg'
import Process from '@static/svgs/topics/process.inline.svg'
import ProductDesign from '@static/svgs/topics/product-design.inline.svg'
import ToolsAndTrends from '@static/svgs/topics/tools-and-trends.inline.svg'

type IconPayload = {
  icon: React.FC<WithClassName>
  name: string
}

type TypeInsightTypeIconConfig = Record<TypeInsightType, IconPayload>

export const TypeInsightTypeIconConfig: TypeInsightTypeIconConfig = {
  Article: {
    icon: Article,
    name: 'Article'
  },
  'White Paper': {
    icon: WhitePaper,
    name: 'White Paper'
  },
  'Email Course': {
    icon: EmailCourse,
    name: 'Email Course'
  },
  Event: {
    icon: Event,
    name: 'Event'
  },
  Podcast: {
    icon: Podcast,
    name: 'Podcast'
  },
  Publication: {
    icon: Publication,
    name: 'Publication'
  },
  Video: {
    icon: Video,
    name: 'Video'
  },
  Webinar: {
    icon: Webinar,
    name: 'Webinar'
  }
}

type TypeInsightTopicIconConfig = Record<TypeInsightTopic, IconPayload>

export const TypeInsightTopicIconConfig: TypeInsightTopicIconConfig = {
  'Design Strategy': {
    icon: DesignStrategy,
    name: 'Design Strategy'
  },
  'Design Systems': {
    icon: DesignSystems,
    name: 'Design Systems'
  },
  Performance: {
    icon: Performance,
    name: 'Performance'
  },
  Process: {
    icon: Process,
    name: 'Process'
  },
  'Product Design': {
    icon: ProductDesign,
    name: 'Product Design'
  },
  'Tools & Trends': {
    icon: ToolsAndTrends,
    name: 'Tools & Trends'
  }
}
