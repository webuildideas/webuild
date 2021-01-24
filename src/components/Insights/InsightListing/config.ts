// Common
import { InsightTopic, InsightType } from '@common/types/Insight'
import { WithClassName } from '@common/types/Utilities'

// Assets
import Article from '@static/svgs/type/article.inline.svg'
import WhitePaper from '@static/svgs/type/white-paper.inline.svg'
import EmailCourse from '@static/svgs/type/email-course.inline.svg'
import Event from '@static/svgs/type/event.inline.svg'
import Podcast from '@static/svgs/type/podcast.inline.svg'
import Publication from '@static/svgs/type/public.inline.svg'
import Video from '@static/svgs/type/video.inline.svg'
import Webinar from '@static/svgs/type/webinar.inline.svg'

import Clients from '@static/svgs/type/clients.inline.svg'
import Design from '@static/svgs/type/design.inline.svg'
import Digital from '@static/svgs/type/digital.inline.svg'
import Expertise from '@static/svgs/type/expertise.inline.svg'
import Growth from '@static/svgs/type/growth.inline.svg'
import Management from '@static/svgs/type/management.inline.svg'
import Marketing from '@static/svgs/type/marketing.inline.svg'
import Processes from '@static/svgs/type/processes.inline.svg'
import Roles from '@static/svgs/type/roles.inline.svg'
import Team from '@static/svgs/type/team.inline.svg'

type IconPayload = {
  icon: React.FC<WithClassName>
  name: string
}

type InsightTypeIconConfig = Record<InsightType, IconPayload>

export const insightTypeIconConfig: InsightTypeIconConfig = {
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

type InsightTopicIconConfig = Record<InsightTopic, IconPayload>

export const insightTopicIconConfig: InsightTopicIconConfig = {
  clients: {
    icon: Clients,
    name: 'Client'
  },
  design: {
    icon: Design,
    name: 'Design'
  },
  digital: {
    icon: Digital,
    name: 'Digital'
  },
  expertise: {
    icon: Expertise,
    name: 'Expertise'
  },
  growth: {
    icon: Growth,
    name: 'Growth'
  },
  management: {
    icon: Management,
    name: 'Management'
  },
  marketing: {
    icon: Marketing,
    name: 'Marketing'
  },
  processes: {
    icon: Processes,
    name: 'Processes'
  },
  roles: {
    icon: Roles,
    name: 'Roles'
  },
  team: {
    icon: Team,
    name: 'Team'
  }
}
