import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    variables: <T = Variable[]>(args: { where?: VariableWhereInput, orderBy?: VariableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationSettings: <T = ApplicationSetting[]>(args: { where?: ApplicationSettingWhereInput, orderBy?: ApplicationSettingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobApplications: <T = JobApplication[]>(args: { where?: JobApplicationWhereInput, orderBy?: JobApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coupons: <T = Coupon[]>(args: { where?: CouponWhereInput, orderBy?: CouponOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientApplications: <T = ClientApplication[]>(args: { where?: ClientApplicationWhereInput, orderBy?: ClientApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactApplications: <T = ContactApplication[]>(args: { where?: ContactApplicationWhereInput, orderBy?: ContactApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    variable: <T = Variable | null>(args: { where: VariableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationSetting: <T = ApplicationSetting | null>(args: { where: ApplicationSettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobApplication: <T = JobApplication | null>(args: { where: JobApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    coupon: <T = Coupon | null>(args: { where: CouponWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientApplication: <T = ClientApplication | null>(args: { where: ClientApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactApplication: <T = ContactApplication | null>(args: { where: ContactApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    variablesConnection: <T = VariableConnection>(args: { where?: VariableWhereInput, orderBy?: VariableOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    applicationSettingsConnection: <T = ApplicationSettingConnection>(args: { where?: ApplicationSettingWhereInput, orderBy?: ApplicationSettingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobApplicationsConnection: <T = JobApplicationConnection>(args: { where?: JobApplicationWhereInput, orderBy?: JobApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    couponsConnection: <T = CouponConnection>(args: { where?: CouponWhereInput, orderBy?: CouponOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientApplicationsConnection: <T = ClientApplicationConnection>(args: { where?: ClientApplicationWhereInput, orderBy?: ClientApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactApplicationsConnection: <T = ContactApplicationConnection>(args: { where?: ContactApplicationWhereInput, orderBy?: ContactApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createVariable: <T = Variable>(args: { data: VariableCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createApplicationSetting: <T = ApplicationSetting>(args: { data: ApplicationSettingCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJobApplication: <T = JobApplication>(args: { data: JobApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCoupon: <T = Coupon>(args: { data: CouponCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClientApplication: <T = ClientApplication>(args: { data: ClientApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createContactApplication: <T = ContactApplication>(args: { data: ContactApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateVariable: <T = Variable | null>(args: { data: VariableUpdateInput, where: VariableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateApplicationSetting: <T = ApplicationSetting | null>(args: { data: ApplicationSettingUpdateInput, where: ApplicationSettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateJobApplication: <T = JobApplication | null>(args: { data: JobApplicationUpdateInput, where: JobApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateCoupon: <T = Coupon | null>(args: { data: CouponUpdateInput, where: CouponWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateClientApplication: <T = ClientApplication | null>(args: { data: ClientApplicationUpdateInput, where: ClientApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateContactApplication: <T = ContactApplication | null>(args: { data: ContactApplicationUpdateInput, where: ContactApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteVariable: <T = Variable | null>(args: { where: VariableWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteApplicationSetting: <T = ApplicationSetting | null>(args: { where: ApplicationSettingWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteJobApplication: <T = JobApplication | null>(args: { where: JobApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteCoupon: <T = Coupon | null>(args: { where: CouponWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteClientApplication: <T = ClientApplication | null>(args: { where: ClientApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteContactApplication: <T = ContactApplication | null>(args: { where: ContactApplicationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertVariable: <T = Variable>(args: { where: VariableWhereUniqueInput, create: VariableCreateInput, update: VariableUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertApplicationSetting: <T = ApplicationSetting>(args: { where: ApplicationSettingWhereUniqueInput, create: ApplicationSettingCreateInput, update: ApplicationSettingUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJobApplication: <T = JobApplication>(args: { where: JobApplicationWhereUniqueInput, create: JobApplicationCreateInput, update: JobApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCoupon: <T = Coupon>(args: { where: CouponWhereUniqueInput, create: CouponCreateInput, update: CouponUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertClientApplication: <T = ClientApplication>(args: { where: ClientApplicationWhereUniqueInput, create: ClientApplicationCreateInput, update: ClientApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertContactApplication: <T = ContactApplication>(args: { where: ContactApplicationWhereUniqueInput, create: ContactApplicationCreateInput, update: ContactApplicationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyVariables: <T = BatchPayload>(args: { data: VariableUpdateInput, where?: VariableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyApplicationSettings: <T = BatchPayload>(args: { data: ApplicationSettingUpdateInput, where?: ApplicationSettingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobApplications: <T = BatchPayload>(args: { data: JobApplicationUpdateInput, where?: JobApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCoupons: <T = BatchPayload>(args: { data: CouponUpdateInput, where?: CouponWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClientApplications: <T = BatchPayload>(args: { data: ClientApplicationUpdateInput, where?: ClientApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyContactApplications: <T = BatchPayload>(args: { data: ContactApplicationUpdateInput, where?: ContactApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyVariables: <T = BatchPayload>(args: { where?: VariableWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyApplicationSettings: <T = BatchPayload>(args: { where?: ApplicationSettingWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobApplications: <T = BatchPayload>(args: { where?: JobApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCoupons: <T = BatchPayload>(args: { where?: CouponWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClientApplications: <T = BatchPayload>(args: { where?: ClientApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyContactApplications: <T = BatchPayload>(args: { where?: ContactApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    variable: <T = VariableSubscriptionPayload | null>(args: { where?: VariableSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    applicationSetting: <T = ApplicationSettingSubscriptionPayload | null>(args: { where?: ApplicationSettingSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    jobApplication: <T = JobApplicationSubscriptionPayload | null>(args: { where?: JobApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    coupon: <T = CouponSubscriptionPayload | null>(args: { where?: CouponSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    clientApplication: <T = ClientApplicationSubscriptionPayload | null>(args: { where?: ClientApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    contactApplication: <T = ContactApplicationSubscriptionPayload | null>(args: { where?: ContactApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Variable: (where?: VariableWhereInput) => Promise<boolean>
  ApplicationSetting: (where?: ApplicationSettingWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  JobApplication: (where?: JobApplicationWhereInput) => Promise<boolean>
  Coupon: (where?: CouponWhereInput) => Promise<boolean>
  ClientApplication: (where?: ClientApplicationWhereInput) => Promise<boolean>
  ContactApplication: (where?: ContactApplicationWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateApplicationSetting {
  count: Int!
}

type AggregateClientApplication {
  count: Int!
}

type AggregateContactApplication {
  count: Int!
}

type AggregateCoupon {
  count: Int!
}

type AggregateFile {
  count: Int!
}

type AggregateJobApplication {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVariable {
  count: Int!
}

type ApplicationSetting {
  index: Int!
  light_postsPerMonth: Int!
  light_gifs: Int!
  light_videos: Int!
  light_photography: Int!
  pro_postsPerMonth: Int!
  pro_gifs: Int!
  pro_videos: Int!
  pro_photography: Int!
  enterprise_postsPerMonth: Int!
  enterprise_gifs: Int!
  enterprise_videos: Int!
  enterprise_photography: Int!
  post: Int!
  videoMinute: Int!
  photo: Int!
  gif: Int!
  discountAfterMonths: Int!
  light_discountPerMonth: Int!
  pro_discountPerMonth: Int!
  enterprise_discountPerMonth: Int!
}

"""A connection to a list of items."""
type ApplicationSettingConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ApplicationSettingEdge]!
  aggregate: AggregateApplicationSetting!
}

input ApplicationSettingCreateInput {
  index: Int!
  light_postsPerMonth: Int!
  light_gifs: Int!
  light_videos: Int!
  light_photography: Int!
  pro_postsPerMonth: Int!
  pro_gifs: Int!
  pro_videos: Int!
  pro_photography: Int!
  enterprise_postsPerMonth: Int!
  enterprise_gifs: Int!
  enterprise_videos: Int!
  enterprise_photography: Int!
  post: Int!
  videoMinute: Int!
  photo: Int!
  gif: Int!
  discountAfterMonths: Int!
  light_discountPerMonth: Int!
  pro_discountPerMonth: Int!
  enterprise_discountPerMonth: Int!
}

"""An edge in a connection."""
type ApplicationSettingEdge {
  """The item at the end of the edge."""
  node: ApplicationSetting!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ApplicationSettingOrderByInput {
  index_ASC
  index_DESC
  light_postsPerMonth_ASC
  light_postsPerMonth_DESC
  light_gifs_ASC
  light_gifs_DESC
  light_videos_ASC
  light_videos_DESC
  light_photography_ASC
  light_photography_DESC
  pro_postsPerMonth_ASC
  pro_postsPerMonth_DESC
  pro_gifs_ASC
  pro_gifs_DESC
  pro_videos_ASC
  pro_videos_DESC
  pro_photography_ASC
  pro_photography_DESC
  enterprise_postsPerMonth_ASC
  enterprise_postsPerMonth_DESC
  enterprise_gifs_ASC
  enterprise_gifs_DESC
  enterprise_videos_ASC
  enterprise_videos_DESC
  enterprise_photography_ASC
  enterprise_photography_DESC
  post_ASC
  post_DESC
  videoMinute_ASC
  videoMinute_DESC
  photo_ASC
  photo_DESC
  gif_ASC
  gif_DESC
  discountAfterMonths_ASC
  discountAfterMonths_DESC
  light_discountPerMonth_ASC
  light_discountPerMonth_DESC
  pro_discountPerMonth_ASC
  pro_discountPerMonth_DESC
  enterprise_discountPerMonth_ASC
  enterprise_discountPerMonth_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ApplicationSettingPreviousValues {
  index: Int!
  light_postsPerMonth: Int!
  light_gifs: Int!
  light_videos: Int!
  light_photography: Int!
  pro_postsPerMonth: Int!
  pro_gifs: Int!
  pro_videos: Int!
  pro_photography: Int!
  enterprise_postsPerMonth: Int!
  enterprise_gifs: Int!
  enterprise_videos: Int!
  enterprise_photography: Int!
  post: Int!
  videoMinute: Int!
  photo: Int!
  gif: Int!
  discountAfterMonths: Int!
  light_discountPerMonth: Int!
  pro_discountPerMonth: Int!
  enterprise_discountPerMonth: Int!
}

type ApplicationSettingSubscriptionPayload {
  mutation: MutationType!
  node: ApplicationSetting
  updatedFields: [String!]
  previousValues: ApplicationSettingPreviousValues
}

input ApplicationSettingSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationSettingSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationSettingSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationSettingSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ApplicationSettingWhereInput
}

input ApplicationSettingUpdateInput {
  index: Int
  light_postsPerMonth: Int
  light_gifs: Int
  light_videos: Int
  light_photography: Int
  pro_postsPerMonth: Int
  pro_gifs: Int
  pro_videos: Int
  pro_photography: Int
  enterprise_postsPerMonth: Int
  enterprise_gifs: Int
  enterprise_videos: Int
  enterprise_photography: Int
  post: Int
  videoMinute: Int
  photo: Int
  gif: Int
  discountAfterMonths: Int
  light_discountPerMonth: Int
  pro_discountPerMonth: Int
  enterprise_discountPerMonth: Int
}

input ApplicationSettingWhereInput {
  """Logical AND on all given filters."""
  AND: [ApplicationSettingWhereInput!]

  """Logical OR on all given filters."""
  OR: [ApplicationSettingWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ApplicationSettingWhereInput!]
  index: Int

  """All values that are not equal to given value."""
  index_not: Int

  """All values that are contained in given list."""
  index_in: [Int!]

  """All values that are not contained in given list."""
  index_not_in: [Int!]

  """All values less than the given value."""
  index_lt: Int

  """All values less than or equal the given value."""
  index_lte: Int

  """All values greater than the given value."""
  index_gt: Int

  """All values greater than or equal the given value."""
  index_gte: Int
  light_postsPerMonth: Int

  """All values that are not equal to given value."""
  light_postsPerMonth_not: Int

  """All values that are contained in given list."""
  light_postsPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  light_postsPerMonth_not_in: [Int!]

  """All values less than the given value."""
  light_postsPerMonth_lt: Int

  """All values less than or equal the given value."""
  light_postsPerMonth_lte: Int

  """All values greater than the given value."""
  light_postsPerMonth_gt: Int

  """All values greater than or equal the given value."""
  light_postsPerMonth_gte: Int
  light_gifs: Int

  """All values that are not equal to given value."""
  light_gifs_not: Int

  """All values that are contained in given list."""
  light_gifs_in: [Int!]

  """All values that are not contained in given list."""
  light_gifs_not_in: [Int!]

  """All values less than the given value."""
  light_gifs_lt: Int

  """All values less than or equal the given value."""
  light_gifs_lte: Int

  """All values greater than the given value."""
  light_gifs_gt: Int

  """All values greater than or equal the given value."""
  light_gifs_gte: Int
  light_videos: Int

  """All values that are not equal to given value."""
  light_videos_not: Int

  """All values that are contained in given list."""
  light_videos_in: [Int!]

  """All values that are not contained in given list."""
  light_videos_not_in: [Int!]

  """All values less than the given value."""
  light_videos_lt: Int

  """All values less than or equal the given value."""
  light_videos_lte: Int

  """All values greater than the given value."""
  light_videos_gt: Int

  """All values greater than or equal the given value."""
  light_videos_gte: Int
  light_photography: Int

  """All values that are not equal to given value."""
  light_photography_not: Int

  """All values that are contained in given list."""
  light_photography_in: [Int!]

  """All values that are not contained in given list."""
  light_photography_not_in: [Int!]

  """All values less than the given value."""
  light_photography_lt: Int

  """All values less than or equal the given value."""
  light_photography_lte: Int

  """All values greater than the given value."""
  light_photography_gt: Int

  """All values greater than or equal the given value."""
  light_photography_gte: Int
  pro_postsPerMonth: Int

  """All values that are not equal to given value."""
  pro_postsPerMonth_not: Int

  """All values that are contained in given list."""
  pro_postsPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  pro_postsPerMonth_not_in: [Int!]

  """All values less than the given value."""
  pro_postsPerMonth_lt: Int

  """All values less than or equal the given value."""
  pro_postsPerMonth_lte: Int

  """All values greater than the given value."""
  pro_postsPerMonth_gt: Int

  """All values greater than or equal the given value."""
  pro_postsPerMonth_gte: Int
  pro_gifs: Int

  """All values that are not equal to given value."""
  pro_gifs_not: Int

  """All values that are contained in given list."""
  pro_gifs_in: [Int!]

  """All values that are not contained in given list."""
  pro_gifs_not_in: [Int!]

  """All values less than the given value."""
  pro_gifs_lt: Int

  """All values less than or equal the given value."""
  pro_gifs_lte: Int

  """All values greater than the given value."""
  pro_gifs_gt: Int

  """All values greater than or equal the given value."""
  pro_gifs_gte: Int
  pro_videos: Int

  """All values that are not equal to given value."""
  pro_videos_not: Int

  """All values that are contained in given list."""
  pro_videos_in: [Int!]

  """All values that are not contained in given list."""
  pro_videos_not_in: [Int!]

  """All values less than the given value."""
  pro_videos_lt: Int

  """All values less than or equal the given value."""
  pro_videos_lte: Int

  """All values greater than the given value."""
  pro_videos_gt: Int

  """All values greater than or equal the given value."""
  pro_videos_gte: Int
  pro_photography: Int

  """All values that are not equal to given value."""
  pro_photography_not: Int

  """All values that are contained in given list."""
  pro_photography_in: [Int!]

  """All values that are not contained in given list."""
  pro_photography_not_in: [Int!]

  """All values less than the given value."""
  pro_photography_lt: Int

  """All values less than or equal the given value."""
  pro_photography_lte: Int

  """All values greater than the given value."""
  pro_photography_gt: Int

  """All values greater than or equal the given value."""
  pro_photography_gte: Int
  enterprise_postsPerMonth: Int

  """All values that are not equal to given value."""
  enterprise_postsPerMonth_not: Int

  """All values that are contained in given list."""
  enterprise_postsPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  enterprise_postsPerMonth_not_in: [Int!]

  """All values less than the given value."""
  enterprise_postsPerMonth_lt: Int

  """All values less than or equal the given value."""
  enterprise_postsPerMonth_lte: Int

  """All values greater than the given value."""
  enterprise_postsPerMonth_gt: Int

  """All values greater than or equal the given value."""
  enterprise_postsPerMonth_gte: Int
  enterprise_gifs: Int

  """All values that are not equal to given value."""
  enterprise_gifs_not: Int

  """All values that are contained in given list."""
  enterprise_gifs_in: [Int!]

  """All values that are not contained in given list."""
  enterprise_gifs_not_in: [Int!]

  """All values less than the given value."""
  enterprise_gifs_lt: Int

  """All values less than or equal the given value."""
  enterprise_gifs_lte: Int

  """All values greater than the given value."""
  enterprise_gifs_gt: Int

  """All values greater than or equal the given value."""
  enterprise_gifs_gte: Int
  enterprise_videos: Int

  """All values that are not equal to given value."""
  enterprise_videos_not: Int

  """All values that are contained in given list."""
  enterprise_videos_in: [Int!]

  """All values that are not contained in given list."""
  enterprise_videos_not_in: [Int!]

  """All values less than the given value."""
  enterprise_videos_lt: Int

  """All values less than or equal the given value."""
  enterprise_videos_lte: Int

  """All values greater than the given value."""
  enterprise_videos_gt: Int

  """All values greater than or equal the given value."""
  enterprise_videos_gte: Int
  enterprise_photography: Int

  """All values that are not equal to given value."""
  enterprise_photography_not: Int

  """All values that are contained in given list."""
  enterprise_photography_in: [Int!]

  """All values that are not contained in given list."""
  enterprise_photography_not_in: [Int!]

  """All values less than the given value."""
  enterprise_photography_lt: Int

  """All values less than or equal the given value."""
  enterprise_photography_lte: Int

  """All values greater than the given value."""
  enterprise_photography_gt: Int

  """All values greater than or equal the given value."""
  enterprise_photography_gte: Int
  post: Int

  """All values that are not equal to given value."""
  post_not: Int

  """All values that are contained in given list."""
  post_in: [Int!]

  """All values that are not contained in given list."""
  post_not_in: [Int!]

  """All values less than the given value."""
  post_lt: Int

  """All values less than or equal the given value."""
  post_lte: Int

  """All values greater than the given value."""
  post_gt: Int

  """All values greater than or equal the given value."""
  post_gte: Int
  videoMinute: Int

  """All values that are not equal to given value."""
  videoMinute_not: Int

  """All values that are contained in given list."""
  videoMinute_in: [Int!]

  """All values that are not contained in given list."""
  videoMinute_not_in: [Int!]

  """All values less than the given value."""
  videoMinute_lt: Int

  """All values less than or equal the given value."""
  videoMinute_lte: Int

  """All values greater than the given value."""
  videoMinute_gt: Int

  """All values greater than or equal the given value."""
  videoMinute_gte: Int
  photo: Int

  """All values that are not equal to given value."""
  photo_not: Int

  """All values that are contained in given list."""
  photo_in: [Int!]

  """All values that are not contained in given list."""
  photo_not_in: [Int!]

  """All values less than the given value."""
  photo_lt: Int

  """All values less than or equal the given value."""
  photo_lte: Int

  """All values greater than the given value."""
  photo_gt: Int

  """All values greater than or equal the given value."""
  photo_gte: Int
  gif: Int

  """All values that are not equal to given value."""
  gif_not: Int

  """All values that are contained in given list."""
  gif_in: [Int!]

  """All values that are not contained in given list."""
  gif_not_in: [Int!]

  """All values less than the given value."""
  gif_lt: Int

  """All values less than or equal the given value."""
  gif_lte: Int

  """All values greater than the given value."""
  gif_gt: Int

  """All values greater than or equal the given value."""
  gif_gte: Int
  discountAfterMonths: Int

  """All values that are not equal to given value."""
  discountAfterMonths_not: Int

  """All values that are contained in given list."""
  discountAfterMonths_in: [Int!]

  """All values that are not contained in given list."""
  discountAfterMonths_not_in: [Int!]

  """All values less than the given value."""
  discountAfterMonths_lt: Int

  """All values less than or equal the given value."""
  discountAfterMonths_lte: Int

  """All values greater than the given value."""
  discountAfterMonths_gt: Int

  """All values greater than or equal the given value."""
  discountAfterMonths_gte: Int
  light_discountPerMonth: Int

  """All values that are not equal to given value."""
  light_discountPerMonth_not: Int

  """All values that are contained in given list."""
  light_discountPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  light_discountPerMonth_not_in: [Int!]

  """All values less than the given value."""
  light_discountPerMonth_lt: Int

  """All values less than or equal the given value."""
  light_discountPerMonth_lte: Int

  """All values greater than the given value."""
  light_discountPerMonth_gt: Int

  """All values greater than or equal the given value."""
  light_discountPerMonth_gte: Int
  pro_discountPerMonth: Int

  """All values that are not equal to given value."""
  pro_discountPerMonth_not: Int

  """All values that are contained in given list."""
  pro_discountPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  pro_discountPerMonth_not_in: [Int!]

  """All values less than the given value."""
  pro_discountPerMonth_lt: Int

  """All values less than or equal the given value."""
  pro_discountPerMonth_lte: Int

  """All values greater than the given value."""
  pro_discountPerMonth_gt: Int

  """All values greater than or equal the given value."""
  pro_discountPerMonth_gte: Int
  enterprise_discountPerMonth: Int

  """All values that are not equal to given value."""
  enterprise_discountPerMonth_not: Int

  """All values that are contained in given list."""
  enterprise_discountPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  enterprise_discountPerMonth_not_in: [Int!]

  """All values less than the given value."""
  enterprise_discountPerMonth_lt: Int

  """All values less than or equal the given value."""
  enterprise_discountPerMonth_lte: Int

  """All values greater than the given value."""
  enterprise_discountPerMonth_gt: Int

  """All values greater than or equal the given value."""
  enterprise_discountPerMonth_gte: Int
}

input ApplicationSettingWhereUniqueInput {
  index: Int
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type ClientApplication implements Node {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int!
  photography: Int!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealMonths: Int!
  package: Package!
  totalPrice: Int!
  createdAt: DateTime!
  coupon(where: CouponWhereInput): Coupon
}

"""A connection to a list of items."""
type ClientApplicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ClientApplicationEdge]!
  aggregate: AggregateClientApplication!
}

input ClientApplicationCreateInput {
  name: String!
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int!
  photography: Int!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealMonths: Int!
  package: Package!
  totalPrice: Int!
  coupon: CouponCreateOneWithoutUsedInInput
}

input ClientApplicationCreateOneWithoutCouponInput {
  create: ClientApplicationCreateWithoutCouponInput
  connect: ClientApplicationWhereUniqueInput
}

input ClientApplicationCreateWithoutCouponInput {
  name: String!
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int!
  photography: Int!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealMonths: Int!
  package: Package!
  totalPrice: Int!
}

"""An edge in a connection."""
type ClientApplicationEdge {
  """The item at the end of the edge."""
  node: ClientApplication!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientApplicationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  email_ASC
  email_DESC
  facebook_ASC
  facebook_DESC
  address_ASC
  address_DESC
  postsPerMonth_ASC
  postsPerMonth_DESC
  photography_ASC
  photography_DESC
  gifs_ASC
  gifs_DESC
  videos_ASC
  videos_DESC
  videoMinutesCount_ASC
  videoMinutesCount_DESC
  website_ASC
  website_DESC
  hasHost_ASC
  hasHost_DESC
  hasDomain_ASC
  hasDomain_DESC
  dealMonths_ASC
  dealMonths_DESC
  package_ASC
  package_DESC
  totalPrice_ASC
  totalPrice_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClientApplicationPreviousValues {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int!
  photography: Int!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealMonths: Int!
  package: Package!
  totalPrice: Int!
  createdAt: DateTime!
}

type ClientApplicationSubscriptionPayload {
  mutation: MutationType!
  node: ClientApplication
  updatedFields: [String!]
  previousValues: ClientApplicationPreviousValues
}

input ClientApplicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientApplicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientApplicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientApplicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ClientApplicationWhereInput
}

input ClientApplicationUpdateInput {
  name: String
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
  coupon: CouponUpdateOneWithoutUsedInInput
}

input ClientApplicationUpdateOneWithoutCouponInput {
  create: ClientApplicationCreateWithoutCouponInput
  connect: ClientApplicationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ClientApplicationUpdateWithoutCouponDataInput
  upsert: ClientApplicationUpsertWithoutCouponInput
}

input ClientApplicationUpdateWithoutCouponDataInput {
  name: String
  phoneNumber: String
  email: String
  facebook: String
  address: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
}

input ClientApplicationUpsertWithoutCouponInput {
  update: ClientApplicationUpdateWithoutCouponDataInput!
  create: ClientApplicationCreateWithoutCouponInput!
}

input ClientApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientApplicationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  facebook: String

  """All values that are not equal to given value."""
  facebook_not: String

  """All values that are contained in given list."""
  facebook_in: [String!]

  """All values that are not contained in given list."""
  facebook_not_in: [String!]

  """All values less than the given value."""
  facebook_lt: String

  """All values less than or equal the given value."""
  facebook_lte: String

  """All values greater than the given value."""
  facebook_gt: String

  """All values greater than or equal the given value."""
  facebook_gte: String

  """All values containing the given string."""
  facebook_contains: String

  """All values not containing the given string."""
  facebook_not_contains: String

  """All values starting with the given string."""
  facebook_starts_with: String

  """All values not starting with the given string."""
  facebook_not_starts_with: String

  """All values ending with the given string."""
  facebook_ends_with: String

  """All values not ending with the given string."""
  facebook_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  postsPerMonth: Int

  """All values that are not equal to given value."""
  postsPerMonth_not: Int

  """All values that are contained in given list."""
  postsPerMonth_in: [Int!]

  """All values that are not contained in given list."""
  postsPerMonth_not_in: [Int!]

  """All values less than the given value."""
  postsPerMonth_lt: Int

  """All values less than or equal the given value."""
  postsPerMonth_lte: Int

  """All values greater than the given value."""
  postsPerMonth_gt: Int

  """All values greater than or equal the given value."""
  postsPerMonth_gte: Int
  photography: Int

  """All values that are not equal to given value."""
  photography_not: Int

  """All values that are contained in given list."""
  photography_in: [Int!]

  """All values that are not contained in given list."""
  photography_not_in: [Int!]

  """All values less than the given value."""
  photography_lt: Int

  """All values less than or equal the given value."""
  photography_lte: Int

  """All values greater than the given value."""
  photography_gt: Int

  """All values greater than or equal the given value."""
  photography_gte: Int
  gifs: Int

  """All values that are not equal to given value."""
  gifs_not: Int

  """All values that are contained in given list."""
  gifs_in: [Int!]

  """All values that are not contained in given list."""
  gifs_not_in: [Int!]

  """All values less than the given value."""
  gifs_lt: Int

  """All values less than or equal the given value."""
  gifs_lte: Int

  """All values greater than the given value."""
  gifs_gt: Int

  """All values greater than or equal the given value."""
  gifs_gte: Int
  videos: Int

  """All values that are not equal to given value."""
  videos_not: Int

  """All values that are contained in given list."""
  videos_in: [Int!]

  """All values that are not contained in given list."""
  videos_not_in: [Int!]

  """All values less than the given value."""
  videos_lt: Int

  """All values less than or equal the given value."""
  videos_lte: Int

  """All values greater than the given value."""
  videos_gt: Int

  """All values greater than or equal the given value."""
  videos_gte: Int
  videoMinutesCount: Int

  """All values that are not equal to given value."""
  videoMinutesCount_not: Int

  """All values that are contained in given list."""
  videoMinutesCount_in: [Int!]

  """All values that are not contained in given list."""
  videoMinutesCount_not_in: [Int!]

  """All values less than the given value."""
  videoMinutesCount_lt: Int

  """All values less than or equal the given value."""
  videoMinutesCount_lte: Int

  """All values greater than the given value."""
  videoMinutesCount_gt: Int

  """All values greater than or equal the given value."""
  videoMinutesCount_gte: Int
  website: Boolean

  """All values that are not equal to given value."""
  website_not: Boolean
  hasHost: Boolean

  """All values that are not equal to given value."""
  hasHost_not: Boolean
  hasDomain: Boolean

  """All values that are not equal to given value."""
  hasDomain_not: Boolean
  dealMonths: Int

  """All values that are not equal to given value."""
  dealMonths_not: Int

  """All values that are contained in given list."""
  dealMonths_in: [Int!]

  """All values that are not contained in given list."""
  dealMonths_not_in: [Int!]

  """All values less than the given value."""
  dealMonths_lt: Int

  """All values less than or equal the given value."""
  dealMonths_lte: Int

  """All values greater than the given value."""
  dealMonths_gt: Int

  """All values greater than or equal the given value."""
  dealMonths_gte: Int
  package: Package

  """All values that are not equal to given value."""
  package_not: Package

  """All values that are contained in given list."""
  package_in: [Package!]

  """All values that are not contained in given list."""
  package_not_in: [Package!]
  totalPrice: Int

  """All values that are not equal to given value."""
  totalPrice_not: Int

  """All values that are contained in given list."""
  totalPrice_in: [Int!]

  """All values that are not contained in given list."""
  totalPrice_not_in: [Int!]

  """All values less than the given value."""
  totalPrice_lt: Int

  """All values less than or equal the given value."""
  totalPrice_lte: Int

  """All values greater than the given value."""
  totalPrice_gt: Int

  """All values greater than or equal the given value."""
  totalPrice_gte: Int
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  coupon: CouponWhereInput
}

input ClientApplicationWhereUniqueInput {
  id: ID
}

type ContactApplication implements Node {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  address: String
  question: String!
  body: String!
}

"""A connection to a list of items."""
type ContactApplicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ContactApplicationEdge]!
  aggregate: AggregateContactApplication!
}

input ContactApplicationCreateInput {
  name: String!
  phoneNumber: String
  email: String
  address: String
  question: String!
  body: String!
}

"""An edge in a connection."""
type ContactApplicationEdge {
  """The item at the end of the edge."""
  node: ContactApplication!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ContactApplicationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  email_ASC
  email_DESC
  address_ASC
  address_DESC
  question_ASC
  question_DESC
  body_ASC
  body_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ContactApplicationPreviousValues {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  address: String
  question: String!
  body: String!
}

type ContactApplicationSubscriptionPayload {
  mutation: MutationType!
  node: ContactApplication
  updatedFields: [String!]
  previousValues: ContactApplicationPreviousValues
}

input ContactApplicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactApplicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactApplicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactApplicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ContactApplicationWhereInput
}

input ContactApplicationUpdateInput {
  name: String
  phoneNumber: String
  email: String
  address: String
  question: String
  body: String
}

input ContactApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ContactApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ContactApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ContactApplicationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  question: String

  """All values that are not equal to given value."""
  question_not: String

  """All values that are contained in given list."""
  question_in: [String!]

  """All values that are not contained in given list."""
  question_not_in: [String!]

  """All values less than the given value."""
  question_lt: String

  """All values less than or equal the given value."""
  question_lte: String

  """All values greater than the given value."""
  question_gt: String

  """All values greater than or equal the given value."""
  question_gte: String

  """All values containing the given string."""
  question_contains: String

  """All values not containing the given string."""
  question_not_contains: String

  """All values starting with the given string."""
  question_starts_with: String

  """All values not starting with the given string."""
  question_not_starts_with: String

  """All values ending with the given string."""
  question_ends_with: String

  """All values not ending with the given string."""
  question_not_ends_with: String
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
}

input ContactApplicationWhereUniqueInput {
  id: ID
}

type Coupon implements Node {
  id: ID!
  coupon: String!
  value: Int!
  discountType: DiscountType!
  usedIn(where: ClientApplicationWhereInput): ClientApplication
  author(where: UserWhereInput): User!
  createdAt: DateTime!
}

"""A connection to a list of items."""
type CouponConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CouponEdge]!
  aggregate: AggregateCoupon!
}

input CouponCreateInput {
  coupon: String!
  value: Int!
  discountType: DiscountType!
  usedIn: ClientApplicationCreateOneWithoutCouponInput
  author: UserCreateOneInput!
}

input CouponCreateOneWithoutUsedInInput {
  create: CouponCreateWithoutUsedInInput
  connect: CouponWhereUniqueInput
}

input CouponCreateWithoutUsedInInput {
  coupon: String!
  value: Int!
  discountType: DiscountType!
  author: UserCreateOneInput!
}

"""An edge in a connection."""
type CouponEdge {
  """The item at the end of the edge."""
  node: Coupon!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CouponOrderByInput {
  id_ASC
  id_DESC
  coupon_ASC
  coupon_DESC
  value_ASC
  value_DESC
  discountType_ASC
  discountType_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CouponPreviousValues {
  id: ID!
  coupon: String!
  value: Int!
  discountType: DiscountType!
  createdAt: DateTime!
}

type CouponSubscriptionPayload {
  mutation: MutationType!
  node: Coupon
  updatedFields: [String!]
  previousValues: CouponPreviousValues
}

input CouponSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CouponSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CouponSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CouponSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CouponWhereInput
}

input CouponUpdateInput {
  coupon: String
  value: Int
  discountType: DiscountType
  usedIn: ClientApplicationUpdateOneWithoutCouponInput
  author: UserUpdateOneInput
}

input CouponUpdateOneWithoutUsedInInput {
  create: CouponCreateWithoutUsedInInput
  connect: CouponWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CouponUpdateWithoutUsedInDataInput
  upsert: CouponUpsertWithoutUsedInInput
}

input CouponUpdateWithoutUsedInDataInput {
  coupon: String
  value: Int
  discountType: DiscountType
  author: UserUpdateOneInput
}

input CouponUpsertWithoutUsedInInput {
  update: CouponUpdateWithoutUsedInDataInput!
  create: CouponCreateWithoutUsedInInput!
}

input CouponWhereInput {
  """Logical AND on all given filters."""
  AND: [CouponWhereInput!]

  """Logical OR on all given filters."""
  OR: [CouponWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CouponWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  coupon: String

  """All values that are not equal to given value."""
  coupon_not: String

  """All values that are contained in given list."""
  coupon_in: [String!]

  """All values that are not contained in given list."""
  coupon_not_in: [String!]

  """All values less than the given value."""
  coupon_lt: String

  """All values less than or equal the given value."""
  coupon_lte: String

  """All values greater than the given value."""
  coupon_gt: String

  """All values greater than or equal the given value."""
  coupon_gte: String

  """All values containing the given string."""
  coupon_contains: String

  """All values not containing the given string."""
  coupon_not_contains: String

  """All values starting with the given string."""
  coupon_starts_with: String

  """All values not starting with the given string."""
  coupon_not_starts_with: String

  """All values ending with the given string."""
  coupon_ends_with: String

  """All values not ending with the given string."""
  coupon_not_ends_with: String
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  discountType: DiscountType

  """All values that are not equal to given value."""
  discountType_not: DiscountType

  """All values that are contained in given list."""
  discountType_in: [DiscountType!]

  """All values that are not contained in given list."""
  discountType_not_in: [DiscountType!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  usedIn: ClientApplicationWhereInput
  author: UserWhereInput
}

input CouponWhereUniqueInput {
  id: ID
  coupon: String
}

scalar DateTime

enum DiscountType {
  Percentage
  Fixed
}

type File implements Node {
  id: ID!
  name: String!
  checksum: String!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  name: String!
  checksum: String!
}

input FileCreateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  checksum_ASC
  checksum_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FilePreviousValues {
  id: ID!
  name: String!
  checksum: String!
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateDataInput {
  name: String
  checksum: String
}

input FileUpdateInput {
  name: String
  checksum: String
}

input FileUpdateOneInput {
  create: FileCreateInput
  connect: FileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FileUpdateDataInput
  upsert: FileUpsertNestedInput
}

input FileUpsertNestedInput {
  update: FileUpdateDataInput!
  create: FileCreateInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  checksum: String

  """All values that are not equal to given value."""
  checksum_not: String

  """All values that are contained in given list."""
  checksum_in: [String!]

  """All values that are not contained in given list."""
  checksum_not_in: [String!]

  """All values less than the given value."""
  checksum_lt: String

  """All values less than or equal the given value."""
  checksum_lte: String

  """All values greater than the given value."""
  checksum_gt: String

  """All values greater than or equal the given value."""
  checksum_gte: String

  """All values containing the given string."""
  checksum_contains: String

  """All values not containing the given string."""
  checksum_not_contains: String

  """All values starting with the given string."""
  checksum_starts_with: String

  """All values not starting with the given string."""
  checksum_not_starts_with: String

  """All values ending with the given string."""
  checksum_ends_with: String

  """All values not ending with the given string."""
  checksum_not_ends_with: String
}

input FileWhereUniqueInput {
  id: ID
}

type JobApplication implements Node {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  address: String
  positions: [JobPosition!]
  resume(where: FileWhereInput): File!
  linkedIn: String
  createdAt: DateTime!
}

"""A connection to a list of items."""
type JobApplicationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobApplicationEdge]!
  aggregate: AggregateJobApplication!
}

input JobApplicationCreateInput {
  name: String!
  phoneNumber: String
  email: String
  address: String
  linkedIn: String
  positions: JobApplicationCreatepositionsInput
  resume: FileCreateOneInput!
}

input JobApplicationCreatepositionsInput {
  set: [JobPosition!]
}

"""An edge in a connection."""
type JobApplicationEdge {
  """The item at the end of the edge."""
  node: JobApplication!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobApplicationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  email_ASC
  email_DESC
  address_ASC
  address_DESC
  linkedIn_ASC
  linkedIn_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JobApplicationPreviousValues {
  id: ID!
  name: String!
  phoneNumber: String
  email: String
  address: String
  positions: [JobPosition!]
  linkedIn: String
  createdAt: DateTime!
}

type JobApplicationSubscriptionPayload {
  mutation: MutationType!
  node: JobApplication
  updatedFields: [String!]
  previousValues: JobApplicationPreviousValues
}

input JobApplicationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobApplicationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobApplicationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobApplicationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: JobApplicationWhereInput
}

input JobApplicationUpdateInput {
  name: String
  phoneNumber: String
  email: String
  address: String
  linkedIn: String
  positions: JobApplicationUpdatepositionsInput
  resume: FileUpdateOneInput
}

input JobApplicationUpdatepositionsInput {
  set: [JobPosition!]
}

input JobApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [JobApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobApplicationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  phoneNumber: String

  """All values that are not equal to given value."""
  phoneNumber_not: String

  """All values that are contained in given list."""
  phoneNumber_in: [String!]

  """All values that are not contained in given list."""
  phoneNumber_not_in: [String!]

  """All values less than the given value."""
  phoneNumber_lt: String

  """All values less than or equal the given value."""
  phoneNumber_lte: String

  """All values greater than the given value."""
  phoneNumber_gt: String

  """All values greater than or equal the given value."""
  phoneNumber_gte: String

  """All values containing the given string."""
  phoneNumber_contains: String

  """All values not containing the given string."""
  phoneNumber_not_contains: String

  """All values starting with the given string."""
  phoneNumber_starts_with: String

  """All values not starting with the given string."""
  phoneNumber_not_starts_with: String

  """All values ending with the given string."""
  phoneNumber_ends_with: String

  """All values not ending with the given string."""
  phoneNumber_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  linkedIn: String

  """All values that are not equal to given value."""
  linkedIn_not: String

  """All values that are contained in given list."""
  linkedIn_in: [String!]

  """All values that are not contained in given list."""
  linkedIn_not_in: [String!]

  """All values less than the given value."""
  linkedIn_lt: String

  """All values less than or equal the given value."""
  linkedIn_lte: String

  """All values greater than the given value."""
  linkedIn_gt: String

  """All values greater than or equal the given value."""
  linkedIn_gte: String

  """All values containing the given string."""
  linkedIn_contains: String

  """All values not containing the given string."""
  linkedIn_not_contains: String

  """All values starting with the given string."""
  linkedIn_starts_with: String

  """All values not starting with the given string."""
  linkedIn_not_starts_with: String

  """All values ending with the given string."""
  linkedIn_ends_with: String

  """All values not ending with the given string."""
  linkedIn_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  resume: FileWhereInput
}

input JobApplicationWhereUniqueInput {
  id: ID
}

enum JobPosition {
  Media
  Graphics
  Photography
  PublicRelations
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createVariable(data: VariableCreateInput!): Variable!
  createApplicationSetting(data: ApplicationSettingCreateInput!): ApplicationSetting!
  createUser(data: UserCreateInput!): User!
  createPost(data: PostCreateInput!): Post!
  createJobApplication(data: JobApplicationCreateInput!): JobApplication!
  createCoupon(data: CouponCreateInput!): Coupon!
  createClientApplication(data: ClientApplicationCreateInput!): ClientApplication!
  createContactApplication(data: ContactApplicationCreateInput!): ContactApplication!
  createFile(data: FileCreateInput!): File!
  updateVariable(data: VariableUpdateInput!, where: VariableWhereUniqueInput!): Variable
  updateApplicationSetting(data: ApplicationSettingUpdateInput!, where: ApplicationSettingWhereUniqueInput!): ApplicationSetting
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateJobApplication(data: JobApplicationUpdateInput!, where: JobApplicationWhereUniqueInput!): JobApplication
  updateCoupon(data: CouponUpdateInput!, where: CouponWhereUniqueInput!): Coupon
  updateClientApplication(data: ClientApplicationUpdateInput!, where: ClientApplicationWhereUniqueInput!): ClientApplication
  updateContactApplication(data: ContactApplicationUpdateInput!, where: ContactApplicationWhereUniqueInput!): ContactApplication
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  deleteVariable(where: VariableWhereUniqueInput!): Variable
  deleteApplicationSetting(where: ApplicationSettingWhereUniqueInput!): ApplicationSetting
  deleteUser(where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  deleteJobApplication(where: JobApplicationWhereUniqueInput!): JobApplication
  deleteCoupon(where: CouponWhereUniqueInput!): Coupon
  deleteClientApplication(where: ClientApplicationWhereUniqueInput!): ClientApplication
  deleteContactApplication(where: ContactApplicationWhereUniqueInput!): ContactApplication
  deleteFile(where: FileWhereUniqueInput!): File
  upsertVariable(where: VariableWhereUniqueInput!, create: VariableCreateInput!, update: VariableUpdateInput!): Variable!
  upsertApplicationSetting(where: ApplicationSettingWhereUniqueInput!, create: ApplicationSettingCreateInput!, update: ApplicationSettingUpdateInput!): ApplicationSetting!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertJobApplication(where: JobApplicationWhereUniqueInput!, create: JobApplicationCreateInput!, update: JobApplicationUpdateInput!): JobApplication!
  upsertCoupon(where: CouponWhereUniqueInput!, create: CouponCreateInput!, update: CouponUpdateInput!): Coupon!
  upsertClientApplication(where: ClientApplicationWhereUniqueInput!, create: ClientApplicationCreateInput!, update: ClientApplicationUpdateInput!): ClientApplication!
  upsertContactApplication(where: ContactApplicationWhereUniqueInput!, create: ContactApplicationCreateInput!, update: ContactApplicationUpdateInput!): ContactApplication!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  updateManyVariables(data: VariableUpdateInput!, where: VariableWhereInput): BatchPayload!
  updateManyApplicationSettings(data: ApplicationSettingUpdateInput!, where: ApplicationSettingWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyJobApplications(data: JobApplicationUpdateInput!, where: JobApplicationWhereInput): BatchPayload!
  updateManyCoupons(data: CouponUpdateInput!, where: CouponWhereInput): BatchPayload!
  updateManyClientApplications(data: ClientApplicationUpdateInput!, where: ClientApplicationWhereInput): BatchPayload!
  updateManyContactApplications(data: ContactApplicationUpdateInput!, where: ContactApplicationWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateInput!, where: FileWhereInput): BatchPayload!
  deleteManyVariables(where: VariableWhereInput): BatchPayload!
  deleteManyApplicationSettings(where: ApplicationSettingWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyJobApplications(where: JobApplicationWhereInput): BatchPayload!
  deleteManyCoupons(where: CouponWhereInput): BatchPayload!
  deleteManyClientApplications(where: ClientApplicationWhereInput): BatchPayload!
  deleteManyContactApplications(where: ContactApplicationWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

enum Package {
  Light
  Pro
  Enterprise
  Custom
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum Permission {
  Admin
  Posts
  JobApplications
  ClientApplications
  ContactApplications
  Coupons
}

type Post implements Node {
  id: ID!
  title: String!
  body: String!
  author(where: UserWhereInput): User!
  badge: String
  badgeColorClass: String
  createdAt: DateTime!
  updatedAt: DateTime!
  thumbnailBody: String!
  thumbnailImage(where: FileWhereInput): File
}

"""A connection to a list of items."""
type PostConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  title: String!
  body: String!
  badge: String
  badgeColorClass: String
  thumbnailBody: String!
  author: UserCreateOneWithoutPostsInput!
  thumbnailImage: FileCreateOneInput
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  body: String!
  badge: String
  badgeColorClass: String
  thumbnailBody: String!
  thumbnailImage: FileCreateOneInput
}

"""An edge in a connection."""
type PostEdge {
  """The item at the end of the edge."""
  node: Post!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
  badge_ASC
  badge_DESC
  badgeColorClass_ASC
  badgeColorClass_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  thumbnailBody_ASC
  thumbnailBody_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  body: String!
  badge: String
  badgeColorClass: String
  createdAt: DateTime!
  updatedAt: DateTime!
  thumbnailBody: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PostSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  title: String
  body: String
  badge: String
  badgeColorClass: String
  thumbnailBody: String
  author: UserUpdateOneWithoutPostsInput
  thumbnailImage: FileUpdateOneInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  title: String
  body: String
  badge: String
  badgeColorClass: String
  thumbnailBody: String
  thumbnailImage: FileUpdateOneInput
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """Logical AND on all given filters."""
  AND: [PostWhereInput!]

  """Logical OR on all given filters."""
  OR: [PostWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PostWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  body: String

  """All values that are not equal to given value."""
  body_not: String

  """All values that are contained in given list."""
  body_in: [String!]

  """All values that are not contained in given list."""
  body_not_in: [String!]

  """All values less than the given value."""
  body_lt: String

  """All values less than or equal the given value."""
  body_lte: String

  """All values greater than the given value."""
  body_gt: String

  """All values greater than or equal the given value."""
  body_gte: String

  """All values containing the given string."""
  body_contains: String

  """All values not containing the given string."""
  body_not_contains: String

  """All values starting with the given string."""
  body_starts_with: String

  """All values not starting with the given string."""
  body_not_starts_with: String

  """All values ending with the given string."""
  body_ends_with: String

  """All values not ending with the given string."""
  body_not_ends_with: String
  badge: String

  """All values that are not equal to given value."""
  badge_not: String

  """All values that are contained in given list."""
  badge_in: [String!]

  """All values that are not contained in given list."""
  badge_not_in: [String!]

  """All values less than the given value."""
  badge_lt: String

  """All values less than or equal the given value."""
  badge_lte: String

  """All values greater than the given value."""
  badge_gt: String

  """All values greater than or equal the given value."""
  badge_gte: String

  """All values containing the given string."""
  badge_contains: String

  """All values not containing the given string."""
  badge_not_contains: String

  """All values starting with the given string."""
  badge_starts_with: String

  """All values not starting with the given string."""
  badge_not_starts_with: String

  """All values ending with the given string."""
  badge_ends_with: String

  """All values not ending with the given string."""
  badge_not_ends_with: String
  badgeColorClass: String

  """All values that are not equal to given value."""
  badgeColorClass_not: String

  """All values that are contained in given list."""
  badgeColorClass_in: [String!]

  """All values that are not contained in given list."""
  badgeColorClass_not_in: [String!]

  """All values less than the given value."""
  badgeColorClass_lt: String

  """All values less than or equal the given value."""
  badgeColorClass_lte: String

  """All values greater than the given value."""
  badgeColorClass_gt: String

  """All values greater than or equal the given value."""
  badgeColorClass_gte: String

  """All values containing the given string."""
  badgeColorClass_contains: String

  """All values not containing the given string."""
  badgeColorClass_not_contains: String

  """All values starting with the given string."""
  badgeColorClass_starts_with: String

  """All values not starting with the given string."""
  badgeColorClass_not_starts_with: String

  """All values ending with the given string."""
  badgeColorClass_ends_with: String

  """All values not ending with the given string."""
  badgeColorClass_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  thumbnailBody: String

  """All values that are not equal to given value."""
  thumbnailBody_not: String

  """All values that are contained in given list."""
  thumbnailBody_in: [String!]

  """All values that are not contained in given list."""
  thumbnailBody_not_in: [String!]

  """All values less than the given value."""
  thumbnailBody_lt: String

  """All values less than or equal the given value."""
  thumbnailBody_lte: String

  """All values greater than the given value."""
  thumbnailBody_gt: String

  """All values greater than or equal the given value."""
  thumbnailBody_gte: String

  """All values containing the given string."""
  thumbnailBody_contains: String

  """All values not containing the given string."""
  thumbnailBody_not_contains: String

  """All values starting with the given string."""
  thumbnailBody_starts_with: String

  """All values not starting with the given string."""
  thumbnailBody_not_starts_with: String

  """All values ending with the given string."""
  thumbnailBody_ends_with: String

  """All values not ending with the given string."""
  thumbnailBody_not_ends_with: String
  author: UserWhereInput
  thumbnailImage: FileWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  variables(where: VariableWhereInput, orderBy: VariableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Variable]!
  applicationSettings(where: ApplicationSettingWhereInput, orderBy: ApplicationSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ApplicationSetting]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  jobApplications(where: JobApplicationWhereInput, orderBy: JobApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobApplication]!
  coupons(where: CouponWhereInput, orderBy: CouponOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coupon]!
  clientApplications(where: ClientApplicationWhereInput, orderBy: ClientApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClientApplication]!
  contactApplications(where: ContactApplicationWhereInput, orderBy: ContactApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactApplication]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  variable(where: VariableWhereUniqueInput!): Variable
  applicationSetting(where: ApplicationSettingWhereUniqueInput!): ApplicationSetting
  user(where: UserWhereUniqueInput!): User
  post(where: PostWhereUniqueInput!): Post
  jobApplication(where: JobApplicationWhereUniqueInput!): JobApplication
  coupon(where: CouponWhereUniqueInput!): Coupon
  clientApplication(where: ClientApplicationWhereUniqueInput!): ClientApplication
  contactApplication(where: ContactApplicationWhereUniqueInput!): ContactApplication
  file(where: FileWhereUniqueInput!): File
  variablesConnection(where: VariableWhereInput, orderBy: VariableOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VariableConnection!
  applicationSettingsConnection(where: ApplicationSettingWhereInput, orderBy: ApplicationSettingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ApplicationSettingConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  jobApplicationsConnection(where: JobApplicationWhereInput, orderBy: JobApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobApplicationConnection!
  couponsConnection(where: CouponWhereInput, orderBy: CouponOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CouponConnection!
  clientApplicationsConnection(where: ClientApplicationWhereInput, orderBy: ClientApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientApplicationConnection!
  contactApplicationsConnection(where: ContactApplicationWhereInput, orderBy: ContactApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactApplicationConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  variable(where: VariableSubscriptionWhereInput): VariableSubscriptionPayload
  applicationSetting(where: ApplicationSettingSubscriptionWhereInput): ApplicationSettingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  jobApplication(where: JobApplicationSubscriptionWhereInput): JobApplicationSubscriptionPayload
  coupon(where: CouponSubscriptionWhereInput): CouponSubscriptionPayload
  clientApplication(where: ClientApplicationSubscriptionWhereInput): ClientApplicationSubscriptionPayload
  contactApplication(where: ContactApplicationSubscriptionWhereInput): ContactApplicationSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  username: String!
  password: String!
  permissions: [Permission!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  lastLogin: DateTime
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  username: String!
  password: String!
  lastLogin: DateTime
  permissions: UserCreatepermissionsInput
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutPostsInput {
  name: String!
  username: String!
  password: String!
  lastLogin: DateTime
  permissions: UserCreatepermissionsInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  lastLogin_ASC
  lastLogin_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  username: String!
  password: String!
  permissions: [Permission!]
  lastLogin: DateTime
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  username: String
  password: String
  lastLogin: DateTime
  permissions: UserUpdatepermissionsInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  name: String
  username: String
  password: String
  lastLogin: DateTime
  permissions: UserUpdatepermissionsInput
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutPostsDataInput {
  name: String
  username: String
  password: String
  lastLogin: DateTime
  permissions: UserUpdatepermissionsInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  lastLogin: DateTime

  """All values that are not equal to given value."""
  lastLogin_not: DateTime

  """All values that are contained in given list."""
  lastLogin_in: [DateTime!]

  """All values that are not contained in given list."""
  lastLogin_not_in: [DateTime!]

  """All values less than the given value."""
  lastLogin_lt: DateTime

  """All values less than or equal the given value."""
  lastLogin_lte: DateTime

  """All values greater than the given value."""
  lastLogin_gt: DateTime

  """All values greater than or equal the given value."""
  lastLogin_gte: DateTime
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
}

type Variable {
  index: Int!
  email: String
  phone1: String
  phone2: String
  address: String
  facebook: String
  instagram: String
  linkedIn: String
  youtube: String
  contactEmail: String
  clientsEmail: String
  jobsEmail: String
  additionalTitle: String
  additionalBody: String
}

"""A connection to a list of items."""
type VariableConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [VariableEdge]!
  aggregate: AggregateVariable!
}

input VariableCreateInput {
  index: Int!
  email: String
  phone1: String
  phone2: String
  address: String
  facebook: String
  instagram: String
  linkedIn: String
  youtube: String
  contactEmail: String
  clientsEmail: String
  jobsEmail: String
  additionalTitle: String
  additionalBody: String
}

"""An edge in a connection."""
type VariableEdge {
  """The item at the end of the edge."""
  node: Variable!

  """A cursor for use in pagination."""
  cursor: String!
}

enum VariableOrderByInput {
  index_ASC
  index_DESC
  email_ASC
  email_DESC
  phone1_ASC
  phone1_DESC
  phone2_ASC
  phone2_DESC
  address_ASC
  address_DESC
  facebook_ASC
  facebook_DESC
  instagram_ASC
  instagram_DESC
  linkedIn_ASC
  linkedIn_DESC
  youtube_ASC
  youtube_DESC
  contactEmail_ASC
  contactEmail_DESC
  clientsEmail_ASC
  clientsEmail_DESC
  jobsEmail_ASC
  jobsEmail_DESC
  additionalTitle_ASC
  additionalTitle_DESC
  additionalBody_ASC
  additionalBody_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type VariablePreviousValues {
  index: Int!
  email: String
  phone1: String
  phone2: String
  address: String
  facebook: String
  instagram: String
  linkedIn: String
  youtube: String
  contactEmail: String
  clientsEmail: String
  jobsEmail: String
  additionalTitle: String
  additionalBody: String
}

type VariableSubscriptionPayload {
  mutation: MutationType!
  node: Variable
  updatedFields: [String!]
  previousValues: VariablePreviousValues
}

input VariableSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [VariableSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [VariableSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VariableSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: VariableWhereInput
}

input VariableUpdateInput {
  index: Int
  email: String
  phone1: String
  phone2: String
  address: String
  facebook: String
  instagram: String
  linkedIn: String
  youtube: String
  contactEmail: String
  clientsEmail: String
  jobsEmail: String
  additionalTitle: String
  additionalBody: String
}

input VariableWhereInput {
  """Logical AND on all given filters."""
  AND: [VariableWhereInput!]

  """Logical OR on all given filters."""
  OR: [VariableWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [VariableWhereInput!]
  index: Int

  """All values that are not equal to given value."""
  index_not: Int

  """All values that are contained in given list."""
  index_in: [Int!]

  """All values that are not contained in given list."""
  index_not_in: [Int!]

  """All values less than the given value."""
  index_lt: Int

  """All values less than or equal the given value."""
  index_lte: Int

  """All values greater than the given value."""
  index_gt: Int

  """All values greater than or equal the given value."""
  index_gte: Int
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  phone1: String

  """All values that are not equal to given value."""
  phone1_not: String

  """All values that are contained in given list."""
  phone1_in: [String!]

  """All values that are not contained in given list."""
  phone1_not_in: [String!]

  """All values less than the given value."""
  phone1_lt: String

  """All values less than or equal the given value."""
  phone1_lte: String

  """All values greater than the given value."""
  phone1_gt: String

  """All values greater than or equal the given value."""
  phone1_gte: String

  """All values containing the given string."""
  phone1_contains: String

  """All values not containing the given string."""
  phone1_not_contains: String

  """All values starting with the given string."""
  phone1_starts_with: String

  """All values not starting with the given string."""
  phone1_not_starts_with: String

  """All values ending with the given string."""
  phone1_ends_with: String

  """All values not ending with the given string."""
  phone1_not_ends_with: String
  phone2: String

  """All values that are not equal to given value."""
  phone2_not: String

  """All values that are contained in given list."""
  phone2_in: [String!]

  """All values that are not contained in given list."""
  phone2_not_in: [String!]

  """All values less than the given value."""
  phone2_lt: String

  """All values less than or equal the given value."""
  phone2_lte: String

  """All values greater than the given value."""
  phone2_gt: String

  """All values greater than or equal the given value."""
  phone2_gte: String

  """All values containing the given string."""
  phone2_contains: String

  """All values not containing the given string."""
  phone2_not_contains: String

  """All values starting with the given string."""
  phone2_starts_with: String

  """All values not starting with the given string."""
  phone2_not_starts_with: String

  """All values ending with the given string."""
  phone2_ends_with: String

  """All values not ending with the given string."""
  phone2_not_ends_with: String
  address: String

  """All values that are not equal to given value."""
  address_not: String

  """All values that are contained in given list."""
  address_in: [String!]

  """All values that are not contained in given list."""
  address_not_in: [String!]

  """All values less than the given value."""
  address_lt: String

  """All values less than or equal the given value."""
  address_lte: String

  """All values greater than the given value."""
  address_gt: String

  """All values greater than or equal the given value."""
  address_gte: String

  """All values containing the given string."""
  address_contains: String

  """All values not containing the given string."""
  address_not_contains: String

  """All values starting with the given string."""
  address_starts_with: String

  """All values not starting with the given string."""
  address_not_starts_with: String

  """All values ending with the given string."""
  address_ends_with: String

  """All values not ending with the given string."""
  address_not_ends_with: String
  facebook: String

  """All values that are not equal to given value."""
  facebook_not: String

  """All values that are contained in given list."""
  facebook_in: [String!]

  """All values that are not contained in given list."""
  facebook_not_in: [String!]

  """All values less than the given value."""
  facebook_lt: String

  """All values less than or equal the given value."""
  facebook_lte: String

  """All values greater than the given value."""
  facebook_gt: String

  """All values greater than or equal the given value."""
  facebook_gte: String

  """All values containing the given string."""
  facebook_contains: String

  """All values not containing the given string."""
  facebook_not_contains: String

  """All values starting with the given string."""
  facebook_starts_with: String

  """All values not starting with the given string."""
  facebook_not_starts_with: String

  """All values ending with the given string."""
  facebook_ends_with: String

  """All values not ending with the given string."""
  facebook_not_ends_with: String
  instagram: String

  """All values that are not equal to given value."""
  instagram_not: String

  """All values that are contained in given list."""
  instagram_in: [String!]

  """All values that are not contained in given list."""
  instagram_not_in: [String!]

  """All values less than the given value."""
  instagram_lt: String

  """All values less than or equal the given value."""
  instagram_lte: String

  """All values greater than the given value."""
  instagram_gt: String

  """All values greater than or equal the given value."""
  instagram_gte: String

  """All values containing the given string."""
  instagram_contains: String

  """All values not containing the given string."""
  instagram_not_contains: String

  """All values starting with the given string."""
  instagram_starts_with: String

  """All values not starting with the given string."""
  instagram_not_starts_with: String

  """All values ending with the given string."""
  instagram_ends_with: String

  """All values not ending with the given string."""
  instagram_not_ends_with: String
  linkedIn: String

  """All values that are not equal to given value."""
  linkedIn_not: String

  """All values that are contained in given list."""
  linkedIn_in: [String!]

  """All values that are not contained in given list."""
  linkedIn_not_in: [String!]

  """All values less than the given value."""
  linkedIn_lt: String

  """All values less than or equal the given value."""
  linkedIn_lte: String

  """All values greater than the given value."""
  linkedIn_gt: String

  """All values greater than or equal the given value."""
  linkedIn_gte: String

  """All values containing the given string."""
  linkedIn_contains: String

  """All values not containing the given string."""
  linkedIn_not_contains: String

  """All values starting with the given string."""
  linkedIn_starts_with: String

  """All values not starting with the given string."""
  linkedIn_not_starts_with: String

  """All values ending with the given string."""
  linkedIn_ends_with: String

  """All values not ending with the given string."""
  linkedIn_not_ends_with: String
  youtube: String

  """All values that are not equal to given value."""
  youtube_not: String

  """All values that are contained in given list."""
  youtube_in: [String!]

  """All values that are not contained in given list."""
  youtube_not_in: [String!]

  """All values less than the given value."""
  youtube_lt: String

  """All values less than or equal the given value."""
  youtube_lte: String

  """All values greater than the given value."""
  youtube_gt: String

  """All values greater than or equal the given value."""
  youtube_gte: String

  """All values containing the given string."""
  youtube_contains: String

  """All values not containing the given string."""
  youtube_not_contains: String

  """All values starting with the given string."""
  youtube_starts_with: String

  """All values not starting with the given string."""
  youtube_not_starts_with: String

  """All values ending with the given string."""
  youtube_ends_with: String

  """All values not ending with the given string."""
  youtube_not_ends_with: String
  contactEmail: String

  """All values that are not equal to given value."""
  contactEmail_not: String

  """All values that are contained in given list."""
  contactEmail_in: [String!]

  """All values that are not contained in given list."""
  contactEmail_not_in: [String!]

  """All values less than the given value."""
  contactEmail_lt: String

  """All values less than or equal the given value."""
  contactEmail_lte: String

  """All values greater than the given value."""
  contactEmail_gt: String

  """All values greater than or equal the given value."""
  contactEmail_gte: String

  """All values containing the given string."""
  contactEmail_contains: String

  """All values not containing the given string."""
  contactEmail_not_contains: String

  """All values starting with the given string."""
  contactEmail_starts_with: String

  """All values not starting with the given string."""
  contactEmail_not_starts_with: String

  """All values ending with the given string."""
  contactEmail_ends_with: String

  """All values not ending with the given string."""
  contactEmail_not_ends_with: String
  clientsEmail: String

  """All values that are not equal to given value."""
  clientsEmail_not: String

  """All values that are contained in given list."""
  clientsEmail_in: [String!]

  """All values that are not contained in given list."""
  clientsEmail_not_in: [String!]

  """All values less than the given value."""
  clientsEmail_lt: String

  """All values less than or equal the given value."""
  clientsEmail_lte: String

  """All values greater than the given value."""
  clientsEmail_gt: String

  """All values greater than or equal the given value."""
  clientsEmail_gte: String

  """All values containing the given string."""
  clientsEmail_contains: String

  """All values not containing the given string."""
  clientsEmail_not_contains: String

  """All values starting with the given string."""
  clientsEmail_starts_with: String

  """All values not starting with the given string."""
  clientsEmail_not_starts_with: String

  """All values ending with the given string."""
  clientsEmail_ends_with: String

  """All values not ending with the given string."""
  clientsEmail_not_ends_with: String
  jobsEmail: String

  """All values that are not equal to given value."""
  jobsEmail_not: String

  """All values that are contained in given list."""
  jobsEmail_in: [String!]

  """All values that are not contained in given list."""
  jobsEmail_not_in: [String!]

  """All values less than the given value."""
  jobsEmail_lt: String

  """All values less than or equal the given value."""
  jobsEmail_lte: String

  """All values greater than the given value."""
  jobsEmail_gt: String

  """All values greater than or equal the given value."""
  jobsEmail_gte: String

  """All values containing the given string."""
  jobsEmail_contains: String

  """All values not containing the given string."""
  jobsEmail_not_contains: String

  """All values starting with the given string."""
  jobsEmail_starts_with: String

  """All values not starting with the given string."""
  jobsEmail_not_starts_with: String

  """All values ending with the given string."""
  jobsEmail_ends_with: String

  """All values not ending with the given string."""
  jobsEmail_not_ends_with: String
  additionalTitle: String

  """All values that are not equal to given value."""
  additionalTitle_not: String

  """All values that are contained in given list."""
  additionalTitle_in: [String!]

  """All values that are not contained in given list."""
  additionalTitle_not_in: [String!]

  """All values less than the given value."""
  additionalTitle_lt: String

  """All values less than or equal the given value."""
  additionalTitle_lte: String

  """All values greater than the given value."""
  additionalTitle_gt: String

  """All values greater than or equal the given value."""
  additionalTitle_gte: String

  """All values containing the given string."""
  additionalTitle_contains: String

  """All values not containing the given string."""
  additionalTitle_not_contains: String

  """All values starting with the given string."""
  additionalTitle_starts_with: String

  """All values not starting with the given string."""
  additionalTitle_not_starts_with: String

  """All values ending with the given string."""
  additionalTitle_ends_with: String

  """All values not ending with the given string."""
  additionalTitle_not_ends_with: String
  additionalBody: String

  """All values that are not equal to given value."""
  additionalBody_not: String

  """All values that are contained in given list."""
  additionalBody_in: [String!]

  """All values that are not contained in given list."""
  additionalBody_not_in: [String!]

  """All values less than the given value."""
  additionalBody_lt: String

  """All values less than or equal the given value."""
  additionalBody_lte: String

  """All values greater than the given value."""
  additionalBody_gt: String

  """All values greater than or equal the given value."""
  additionalBody_gte: String

  """All values containing the given string."""
  additionalBody_contains: String

  """All values not containing the given string."""
  additionalBody_not_contains: String

  """All values starting with the given string."""
  additionalBody_starts_with: String

  """All values not starting with the given string."""
  additionalBody_not_starts_with: String

  """All values ending with the given string."""
  additionalBody_ends_with: String

  """All values not ending with the given string."""
  additionalBody_not_ends_with: String
}

input VariableWhereUniqueInput {
  index: Int
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type CouponOrderByInput =   'id_ASC' |
  'id_DESC' |
  'coupon_ASC' |
  'coupon_DESC' |
  'value_ASC' |
  'value_DESC' |
  'discountType_ASC' |
  'discountType_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type Permission =   'Admin' |
  'Posts' |
  'JobApplications' |
  'ClientApplications' |
  'ContactApplications' |
  'Coupons'

export type Package =   'Light' |
  'Pro' |
  'Enterprise' |
  'Custom'

export type VariableOrderByInput =   'index_ASC' |
  'index_DESC' |
  'email_ASC' |
  'email_DESC' |
  'phone1_ASC' |
  'phone1_DESC' |
  'phone2_ASC' |
  'phone2_DESC' |
  'address_ASC' |
  'address_DESC' |
  'facebook_ASC' |
  'facebook_DESC' |
  'instagram_ASC' |
  'instagram_DESC' |
  'linkedIn_ASC' |
  'linkedIn_DESC' |
  'youtube_ASC' |
  'youtube_DESC' |
  'contactEmail_ASC' |
  'contactEmail_DESC' |
  'clientsEmail_ASC' |
  'clientsEmail_DESC' |
  'jobsEmail_ASC' |
  'jobsEmail_DESC' |
  'additionalTitle_ASC' |
  'additionalTitle_DESC' |
  'additionalBody_ASC' |
  'additionalBody_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DiscountType =   'Percentage' |
  'Fixed'

export type ContactApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'email_ASC' |
  'email_DESC' |
  'address_ASC' |
  'address_DESC' |
  'question_ASC' |
  'question_DESC' |
  'body_ASC' |
  'body_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PostOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'body_ASC' |
  'body_DESC' |
  'badge_ASC' |
  'badge_DESC' |
  'badgeColorClass_ASC' |
  'badgeColorClass_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'thumbnailBody_ASC' |
  'thumbnailBody_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'lastLogin_ASC' |
  'lastLogin_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type JobApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'email_ASC' |
  'email_DESC' |
  'address_ASC' |
  'address_DESC' |
  'linkedIn_ASC' |
  'linkedIn_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type JobPosition =   'Media' |
  'Graphics' |
  'Photography' |
  'PublicRelations'

export type ApplicationSettingOrderByInput =   'index_ASC' |
  'index_DESC' |
  'light_postsPerMonth_ASC' |
  'light_postsPerMonth_DESC' |
  'light_gifs_ASC' |
  'light_gifs_DESC' |
  'light_videos_ASC' |
  'light_videos_DESC' |
  'light_photography_ASC' |
  'light_photography_DESC' |
  'pro_postsPerMonth_ASC' |
  'pro_postsPerMonth_DESC' |
  'pro_gifs_ASC' |
  'pro_gifs_DESC' |
  'pro_videos_ASC' |
  'pro_videos_DESC' |
  'pro_photography_ASC' |
  'pro_photography_DESC' |
  'enterprise_postsPerMonth_ASC' |
  'enterprise_postsPerMonth_DESC' |
  'enterprise_gifs_ASC' |
  'enterprise_gifs_DESC' |
  'enterprise_videos_ASC' |
  'enterprise_videos_DESC' |
  'enterprise_photography_ASC' |
  'enterprise_photography_DESC' |
  'post_ASC' |
  'post_DESC' |
  'videoMinute_ASC' |
  'videoMinute_DESC' |
  'photo_ASC' |
  'photo_DESC' |
  'gif_ASC' |
  'gif_DESC' |
  'discountAfterMonths_ASC' |
  'discountAfterMonths_DESC' |
  'light_discountPerMonth_ASC' |
  'light_discountPerMonth_DESC' |
  'pro_discountPerMonth_ASC' |
  'pro_discountPerMonth_DESC' |
  'enterprise_discountPerMonth_ASC' |
  'enterprise_discountPerMonth_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'checksum_ASC' |
  'checksum_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ClientApplicationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'phoneNumber_ASC' |
  'phoneNumber_DESC' |
  'email_ASC' |
  'email_DESC' |
  'facebook_ASC' |
  'facebook_DESC' |
  'address_ASC' |
  'address_DESC' |
  'postsPerMonth_ASC' |
  'postsPerMonth_DESC' |
  'photography_ASC' |
  'photography_DESC' |
  'gifs_ASC' |
  'gifs_DESC' |
  'videos_ASC' |
  'videos_DESC' |
  'videoMinutesCount_ASC' |
  'videoMinutesCount_DESC' |
  'website_ASC' |
  'website_DESC' |
  'hasHost_ASC' |
  'hasHost_DESC' |
  'hasDomain_ASC' |
  'hasDomain_DESC' |
  'dealMonths_ASC' |
  'dealMonths_DESC' |
  'package_ASC' |
  'package_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission
}

export interface VariableWhereInput {
  AND?: VariableWhereInput[] | VariableWhereInput
  OR?: VariableWhereInput[] | VariableWhereInput
  NOT?: VariableWhereInput[] | VariableWhereInput
  index?: Int
  index_not?: Int
  index_in?: Int[] | Int
  index_not_in?: Int[] | Int
  index_lt?: Int
  index_lte?: Int
  index_gt?: Int
  index_gte?: Int
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  phone1?: String
  phone1_not?: String
  phone1_in?: String[] | String
  phone1_not_in?: String[] | String
  phone1_lt?: String
  phone1_lte?: String
  phone1_gt?: String
  phone1_gte?: String
  phone1_contains?: String
  phone1_not_contains?: String
  phone1_starts_with?: String
  phone1_not_starts_with?: String
  phone1_ends_with?: String
  phone1_not_ends_with?: String
  phone2?: String
  phone2_not?: String
  phone2_in?: String[] | String
  phone2_not_in?: String[] | String
  phone2_lt?: String
  phone2_lte?: String
  phone2_gt?: String
  phone2_gte?: String
  phone2_contains?: String
  phone2_not_contains?: String
  phone2_starts_with?: String
  phone2_not_starts_with?: String
  phone2_ends_with?: String
  phone2_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  facebook?: String
  facebook_not?: String
  facebook_in?: String[] | String
  facebook_not_in?: String[] | String
  facebook_lt?: String
  facebook_lte?: String
  facebook_gt?: String
  facebook_gte?: String
  facebook_contains?: String
  facebook_not_contains?: String
  facebook_starts_with?: String
  facebook_not_starts_with?: String
  facebook_ends_with?: String
  facebook_not_ends_with?: String
  instagram?: String
  instagram_not?: String
  instagram_in?: String[] | String
  instagram_not_in?: String[] | String
  instagram_lt?: String
  instagram_lte?: String
  instagram_gt?: String
  instagram_gte?: String
  instagram_contains?: String
  instagram_not_contains?: String
  instagram_starts_with?: String
  instagram_not_starts_with?: String
  instagram_ends_with?: String
  instagram_not_ends_with?: String
  linkedIn?: String
  linkedIn_not?: String
  linkedIn_in?: String[] | String
  linkedIn_not_in?: String[] | String
  linkedIn_lt?: String
  linkedIn_lte?: String
  linkedIn_gt?: String
  linkedIn_gte?: String
  linkedIn_contains?: String
  linkedIn_not_contains?: String
  linkedIn_starts_with?: String
  linkedIn_not_starts_with?: String
  linkedIn_ends_with?: String
  linkedIn_not_ends_with?: String
  youtube?: String
  youtube_not?: String
  youtube_in?: String[] | String
  youtube_not_in?: String[] | String
  youtube_lt?: String
  youtube_lte?: String
  youtube_gt?: String
  youtube_gte?: String
  youtube_contains?: String
  youtube_not_contains?: String
  youtube_starts_with?: String
  youtube_not_starts_with?: String
  youtube_ends_with?: String
  youtube_not_ends_with?: String
  contactEmail?: String
  contactEmail_not?: String
  contactEmail_in?: String[] | String
  contactEmail_not_in?: String[] | String
  contactEmail_lt?: String
  contactEmail_lte?: String
  contactEmail_gt?: String
  contactEmail_gte?: String
  contactEmail_contains?: String
  contactEmail_not_contains?: String
  contactEmail_starts_with?: String
  contactEmail_not_starts_with?: String
  contactEmail_ends_with?: String
  contactEmail_not_ends_with?: String
  clientsEmail?: String
  clientsEmail_not?: String
  clientsEmail_in?: String[] | String
  clientsEmail_not_in?: String[] | String
  clientsEmail_lt?: String
  clientsEmail_lte?: String
  clientsEmail_gt?: String
  clientsEmail_gte?: String
  clientsEmail_contains?: String
  clientsEmail_not_contains?: String
  clientsEmail_starts_with?: String
  clientsEmail_not_starts_with?: String
  clientsEmail_ends_with?: String
  clientsEmail_not_ends_with?: String
  jobsEmail?: String
  jobsEmail_not?: String
  jobsEmail_in?: String[] | String
  jobsEmail_not_in?: String[] | String
  jobsEmail_lt?: String
  jobsEmail_lte?: String
  jobsEmail_gt?: String
  jobsEmail_gte?: String
  jobsEmail_contains?: String
  jobsEmail_not_contains?: String
  jobsEmail_starts_with?: String
  jobsEmail_not_starts_with?: String
  jobsEmail_ends_with?: String
  jobsEmail_not_ends_with?: String
  additionalTitle?: String
  additionalTitle_not?: String
  additionalTitle_in?: String[] | String
  additionalTitle_not_in?: String[] | String
  additionalTitle_lt?: String
  additionalTitle_lte?: String
  additionalTitle_gt?: String
  additionalTitle_gte?: String
  additionalTitle_contains?: String
  additionalTitle_not_contains?: String
  additionalTitle_starts_with?: String
  additionalTitle_not_starts_with?: String
  additionalTitle_ends_with?: String
  additionalTitle_not_ends_with?: String
  additionalBody?: String
  additionalBody_not?: String
  additionalBody_in?: String[] | String
  additionalBody_not_in?: String[] | String
  additionalBody_lt?: String
  additionalBody_lte?: String
  additionalBody_gt?: String
  additionalBody_gte?: String
  additionalBody_contains?: String
  additionalBody_not_contains?: String
  additionalBody_starts_with?: String
  additionalBody_not_starts_with?: String
  additionalBody_ends_with?: String
  additionalBody_not_ends_with?: String
}

export interface ClientApplicationUpdateOneWithoutCouponInput {
  create?: ClientApplicationCreateWithoutCouponInput
  connect?: ClientApplicationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ClientApplicationUpdateWithoutCouponDataInput
  upsert?: ClientApplicationUpsertWithoutCouponInput
}

export interface CouponCreateOneWithoutUsedInInput {
  create?: CouponCreateWithoutUsedInInput
  connect?: CouponWhereUniqueInput
}

export interface CouponUpdateInput {
  coupon?: String
  value?: Int
  discountType?: DiscountType
  usedIn?: ClientApplicationUpdateOneWithoutCouponInput
  author?: UserUpdateOneInput
}

export interface JobApplicationCreateInput {
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  linkedIn?: String
  positions?: JobApplicationCreatepositionsInput
  resume: FileCreateOneInput
}

export interface JobApplicationUpdatepositionsInput {
  set?: JobPosition[] | JobPosition
}

export interface ContactApplicationSubscriptionWhereInput {
  AND?: ContactApplicationSubscriptionWhereInput[] | ContactApplicationSubscriptionWhereInput
  OR?: ContactApplicationSubscriptionWhereInput[] | ContactApplicationSubscriptionWhereInput
  NOT?: ContactApplicationSubscriptionWhereInput[] | ContactApplicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ContactApplicationWhereInput
}

export interface JobApplicationUpdateInput {
  name?: String
  phoneNumber?: String
  email?: String
  address?: String
  linkedIn?: String
  positions?: JobApplicationUpdatepositionsInput
  resume?: FileUpdateOneInput
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  checksum?: String
  checksum_not?: String
  checksum_in?: String[] | String
  checksum_not_in?: String[] | String
  checksum_lt?: String
  checksum_lte?: String
  checksum_gt?: String
  checksum_gte?: String
  checksum_contains?: String
  checksum_not_contains?: String
  checksum_starts_with?: String
  checksum_not_starts_with?: String
  checksum_ends_with?: String
  checksum_not_ends_with?: String
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  NOT?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
  badge?: String
  badge_not?: String
  badge_in?: String[] | String
  badge_not_in?: String[] | String
  badge_lt?: String
  badge_lte?: String
  badge_gt?: String
  badge_gte?: String
  badge_contains?: String
  badge_not_contains?: String
  badge_starts_with?: String
  badge_not_starts_with?: String
  badge_ends_with?: String
  badge_not_ends_with?: String
  badgeColorClass?: String
  badgeColorClass_not?: String
  badgeColorClass_in?: String[] | String
  badgeColorClass_not_in?: String[] | String
  badgeColorClass_lt?: String
  badgeColorClass_lte?: String
  badgeColorClass_gt?: String
  badgeColorClass_gte?: String
  badgeColorClass_contains?: String
  badgeColorClass_not_contains?: String
  badgeColorClass_starts_with?: String
  badgeColorClass_not_starts_with?: String
  badgeColorClass_ends_with?: String
  badgeColorClass_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  thumbnailBody?: String
  thumbnailBody_not?: String
  thumbnailBody_in?: String[] | String
  thumbnailBody_not_in?: String[] | String
  thumbnailBody_lt?: String
  thumbnailBody_lte?: String
  thumbnailBody_gt?: String
  thumbnailBody_gte?: String
  thumbnailBody_contains?: String
  thumbnailBody_not_contains?: String
  thumbnailBody_starts_with?: String
  thumbnailBody_not_starts_with?: String
  thumbnailBody_ends_with?: String
  thumbnailBody_not_ends_with?: String
  author?: UserWhereInput
  thumbnailImage?: FileWhereInput
}

export interface UserUpdateWithoutPostsDataInput {
  name?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  permissions?: UserUpdatepermissionsInput
}

export interface CouponSubscriptionWhereInput {
  AND?: CouponSubscriptionWhereInput[] | CouponSubscriptionWhereInput
  OR?: CouponSubscriptionWhereInput[] | CouponSubscriptionWhereInput
  NOT?: CouponSubscriptionWhereInput[] | CouponSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CouponWhereInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface JobApplicationSubscriptionWhereInput {
  AND?: JobApplicationSubscriptionWhereInput[] | JobApplicationSubscriptionWhereInput
  OR?: JobApplicationSubscriptionWhereInput[] | JobApplicationSubscriptionWhereInput
  NOT?: JobApplicationSubscriptionWhereInput[] | JobApplicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: JobApplicationWhereInput
}

export interface PostUpdateInput {
  title?: String
  body?: String
  badge?: String
  badgeColorClass?: String
  thumbnailBody?: String
  author?: UserUpdateOneWithoutPostsInput
  thumbnailImage?: FileUpdateOneInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  username?: String
  username_not?: String
  username_in?: String[] | String
  username_not_in?: String[] | String
  username_lt?: String
  username_lte?: String
  username_gt?: String
  username_gte?: String
  username_contains?: String
  username_not_contains?: String
  username_starts_with?: String
  username_not_starts_with?: String
  username_ends_with?: String
  username_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  lastLogin?: DateTime
  lastLogin_not?: DateTime
  lastLogin_in?: DateTime[] | DateTime
  lastLogin_not_in?: DateTime[] | DateTime
  lastLogin_lt?: DateTime
  lastLogin_lte?: DateTime
  lastLogin_gt?: DateTime
  lastLogin_gte?: DateTime
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface ApplicationSettingSubscriptionWhereInput {
  AND?: ApplicationSettingSubscriptionWhereInput[] | ApplicationSettingSubscriptionWhereInput
  OR?: ApplicationSettingSubscriptionWhereInput[] | ApplicationSettingSubscriptionWhereInput
  NOT?: ApplicationSettingSubscriptionWhereInput[] | ApplicationSettingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ApplicationSettingWhereInput
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput
  create: FileCreateInput
}

export interface ContactApplicationWhereInput {
  AND?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
  OR?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
  NOT?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  question?: String
  question_not?: String
  question_in?: String[] | String
  question_not_in?: String[] | String
  question_lt?: String
  question_lte?: String
  question_gt?: String
  question_gte?: String
  question_contains?: String
  question_not_contains?: String
  question_starts_with?: String
  question_not_starts_with?: String
  question_ends_with?: String
  question_not_ends_with?: String
  body?: String
  body_not?: String
  body_in?: String[] | String
  body_not_in?: String[] | String
  body_lt?: String
  body_lte?: String
  body_gt?: String
  body_gte?: String
  body_contains?: String
  body_not_contains?: String
  body_starts_with?: String
  body_not_starts_with?: String
  body_ends_with?: String
  body_not_ends_with?: String
}

export interface FileUpdateDataInput {
  name?: String
  checksum?: String
}

export interface FileUpdateInput {
  name?: String
  checksum?: String
}

export interface FileUpdateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FileUpdateDataInput
  upsert?: FileUpsertNestedInput
}

export interface VariableWhereUniqueInput {
  index?: Int
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String
  body?: String
  badge?: String
  badgeColorClass?: String
  thumbnailBody?: String
  thumbnailImage?: FileUpdateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface JobApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
}

export interface ClientApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface FileWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  name?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  permissions?: UserUpdatepermissionsInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface CouponUpdateWithoutUsedInDataInput {
  coupon?: String
  value?: Int
  discountType?: DiscountType
  author?: UserUpdateOneInput
}

export interface ApplicationSettingUpdateInput {
  index?: Int
  light_postsPerMonth?: Int
  light_gifs?: Int
  light_videos?: Int
  light_photography?: Int
  pro_postsPerMonth?: Int
  pro_gifs?: Int
  pro_videos?: Int
  pro_photography?: Int
  enterprise_postsPerMonth?: Int
  enterprise_gifs?: Int
  enterprise_videos?: Int
  enterprise_photography?: Int
  post?: Int
  videoMinute?: Int
  photo?: Int
  gif?: Int
  discountAfterMonths?: Int
  light_discountPerMonth?: Int
  pro_discountPerMonth?: Int
  enterprise_discountPerMonth?: Int
}

export interface ClientApplicationUpdateInput {
  name?: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth?: Int
  photography?: Int
  gifs?: Int
  videos?: Int
  videoMinutesCount?: Int
  website?: Boolean
  hasHost?: Boolean
  hasDomain?: Boolean
  dealMonths?: Int
  package?: Package
  totalPrice?: Int
  coupon?: CouponUpdateOneWithoutUsedInInput
}

export interface VariableUpdateInput {
  index?: Int
  email?: String
  phone1?: String
  phone2?: String
  address?: String
  facebook?: String
  instagram?: String
  linkedIn?: String
  youtube?: String
  contactEmail?: String
  clientsEmail?: String
  jobsEmail?: String
  additionalTitle?: String
  additionalBody?: String
}

export interface UserUpdateDataInput {
  name?: String
  username?: String
  password?: String
  lastLogin?: DateTime
  permissions?: UserUpdatepermissionsInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface VariableCreateInput {
  index: Int
  email?: String
  phone1?: String
  phone2?: String
  address?: String
  facebook?: String
  instagram?: String
  linkedIn?: String
  youtube?: String
  contactEmail?: String
  clientsEmail?: String
  jobsEmail?: String
  additionalTitle?: String
  additionalBody?: String
}

export interface ClientApplicationUpsertWithoutCouponInput {
  update: ClientApplicationUpdateWithoutCouponDataInput
  create: ClientApplicationCreateWithoutCouponInput
}

export interface ApplicationSettingCreateInput {
  index: Int
  light_postsPerMonth: Int
  light_gifs: Int
  light_videos: Int
  light_photography: Int
  pro_postsPerMonth: Int
  pro_gifs: Int
  pro_videos: Int
  pro_photography: Int
  enterprise_postsPerMonth: Int
  enterprise_gifs: Int
  enterprise_videos: Int
  enterprise_photography: Int
  post: Int
  videoMinute: Int
  photo: Int
  gif: Int
  discountAfterMonths: Int
  light_discountPerMonth: Int
  pro_discountPerMonth: Int
  enterprise_discountPerMonth: Int
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface UserCreateInput {
  name: String
  username: String
  password: String
  lastLogin?: DateTime
  permissions?: UserCreatepermissionsInput
  posts?: PostCreateManyWithoutAuthorInput
}

export interface ClientApplicationSubscriptionWhereInput {
  AND?: ClientApplicationSubscriptionWhereInput[] | ClientApplicationSubscriptionWhereInput
  OR?: ClientApplicationSubscriptionWhereInput[] | ClientApplicationSubscriptionWhereInput
  NOT?: ClientApplicationSubscriptionWhereInput[] | ClientApplicationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ClientApplicationWhereInput
}

export interface ContactApplicationCreateInput {
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  question: String
  body: String
}

export interface ClientApplicationWhereInput {
  AND?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  OR?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  NOT?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  facebook?: String
  facebook_not?: String
  facebook_in?: String[] | String
  facebook_not_in?: String[] | String
  facebook_lt?: String
  facebook_lte?: String
  facebook_gt?: String
  facebook_gte?: String
  facebook_contains?: String
  facebook_not_contains?: String
  facebook_starts_with?: String
  facebook_not_starts_with?: String
  facebook_ends_with?: String
  facebook_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  postsPerMonth?: Int
  postsPerMonth_not?: Int
  postsPerMonth_in?: Int[] | Int
  postsPerMonth_not_in?: Int[] | Int
  postsPerMonth_lt?: Int
  postsPerMonth_lte?: Int
  postsPerMonth_gt?: Int
  postsPerMonth_gte?: Int
  photography?: Int
  photography_not?: Int
  photography_in?: Int[] | Int
  photography_not_in?: Int[] | Int
  photography_lt?: Int
  photography_lte?: Int
  photography_gt?: Int
  photography_gte?: Int
  gifs?: Int
  gifs_not?: Int
  gifs_in?: Int[] | Int
  gifs_not_in?: Int[] | Int
  gifs_lt?: Int
  gifs_lte?: Int
  gifs_gt?: Int
  gifs_gte?: Int
  videos?: Int
  videos_not?: Int
  videos_in?: Int[] | Int
  videos_not_in?: Int[] | Int
  videos_lt?: Int
  videos_lte?: Int
  videos_gt?: Int
  videos_gte?: Int
  videoMinutesCount?: Int
  videoMinutesCount_not?: Int
  videoMinutesCount_in?: Int[] | Int
  videoMinutesCount_not_in?: Int[] | Int
  videoMinutesCount_lt?: Int
  videoMinutesCount_lte?: Int
  videoMinutesCount_gt?: Int
  videoMinutesCount_gte?: Int
  website?: Boolean
  website_not?: Boolean
  hasHost?: Boolean
  hasHost_not?: Boolean
  hasDomain?: Boolean
  hasDomain_not?: Boolean
  dealMonths?: Int
  dealMonths_not?: Int
  dealMonths_in?: Int[] | Int
  dealMonths_not_in?: Int[] | Int
  dealMonths_lt?: Int
  dealMonths_lte?: Int
  dealMonths_gt?: Int
  dealMonths_gte?: Int
  package?: Package
  package_not?: Package
  package_in?: Package[] | Package
  package_not_in?: Package[] | Package
  totalPrice?: Int
  totalPrice_not?: Int
  totalPrice_in?: Int[] | Int
  totalPrice_not_in?: Int[] | Int
  totalPrice_lt?: Int
  totalPrice_lte?: Int
  totalPrice_gt?: Int
  totalPrice_gte?: Int
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  coupon?: CouponWhereInput
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PostCreateWithoutAuthorInput {
  title: String
  body: String
  badge?: String
  badgeColorClass?: String
  thumbnailBody: String
  thumbnailImage?: FileCreateOneInput
}

export interface ApplicationSettingWhereInput {
  AND?: ApplicationSettingWhereInput[] | ApplicationSettingWhereInput
  OR?: ApplicationSettingWhereInput[] | ApplicationSettingWhereInput
  NOT?: ApplicationSettingWhereInput[] | ApplicationSettingWhereInput
  index?: Int
  index_not?: Int
  index_in?: Int[] | Int
  index_not_in?: Int[] | Int
  index_lt?: Int
  index_lte?: Int
  index_gt?: Int
  index_gte?: Int
  light_postsPerMonth?: Int
  light_postsPerMonth_not?: Int
  light_postsPerMonth_in?: Int[] | Int
  light_postsPerMonth_not_in?: Int[] | Int
  light_postsPerMonth_lt?: Int
  light_postsPerMonth_lte?: Int
  light_postsPerMonth_gt?: Int
  light_postsPerMonth_gte?: Int
  light_gifs?: Int
  light_gifs_not?: Int
  light_gifs_in?: Int[] | Int
  light_gifs_not_in?: Int[] | Int
  light_gifs_lt?: Int
  light_gifs_lte?: Int
  light_gifs_gt?: Int
  light_gifs_gte?: Int
  light_videos?: Int
  light_videos_not?: Int
  light_videos_in?: Int[] | Int
  light_videos_not_in?: Int[] | Int
  light_videos_lt?: Int
  light_videos_lte?: Int
  light_videos_gt?: Int
  light_videos_gte?: Int
  light_photography?: Int
  light_photography_not?: Int
  light_photography_in?: Int[] | Int
  light_photography_not_in?: Int[] | Int
  light_photography_lt?: Int
  light_photography_lte?: Int
  light_photography_gt?: Int
  light_photography_gte?: Int
  pro_postsPerMonth?: Int
  pro_postsPerMonth_not?: Int
  pro_postsPerMonth_in?: Int[] | Int
  pro_postsPerMonth_not_in?: Int[] | Int
  pro_postsPerMonth_lt?: Int
  pro_postsPerMonth_lte?: Int
  pro_postsPerMonth_gt?: Int
  pro_postsPerMonth_gte?: Int
  pro_gifs?: Int
  pro_gifs_not?: Int
  pro_gifs_in?: Int[] | Int
  pro_gifs_not_in?: Int[] | Int
  pro_gifs_lt?: Int
  pro_gifs_lte?: Int
  pro_gifs_gt?: Int
  pro_gifs_gte?: Int
  pro_videos?: Int
  pro_videos_not?: Int
  pro_videos_in?: Int[] | Int
  pro_videos_not_in?: Int[] | Int
  pro_videos_lt?: Int
  pro_videos_lte?: Int
  pro_videos_gt?: Int
  pro_videos_gte?: Int
  pro_photography?: Int
  pro_photography_not?: Int
  pro_photography_in?: Int[] | Int
  pro_photography_not_in?: Int[] | Int
  pro_photography_lt?: Int
  pro_photography_lte?: Int
  pro_photography_gt?: Int
  pro_photography_gte?: Int
  enterprise_postsPerMonth?: Int
  enterprise_postsPerMonth_not?: Int
  enterprise_postsPerMonth_in?: Int[] | Int
  enterprise_postsPerMonth_not_in?: Int[] | Int
  enterprise_postsPerMonth_lt?: Int
  enterprise_postsPerMonth_lte?: Int
  enterprise_postsPerMonth_gt?: Int
  enterprise_postsPerMonth_gte?: Int
  enterprise_gifs?: Int
  enterprise_gifs_not?: Int
  enterprise_gifs_in?: Int[] | Int
  enterprise_gifs_not_in?: Int[] | Int
  enterprise_gifs_lt?: Int
  enterprise_gifs_lte?: Int
  enterprise_gifs_gt?: Int
  enterprise_gifs_gte?: Int
  enterprise_videos?: Int
  enterprise_videos_not?: Int
  enterprise_videos_in?: Int[] | Int
  enterprise_videos_not_in?: Int[] | Int
  enterprise_videos_lt?: Int
  enterprise_videos_lte?: Int
  enterprise_videos_gt?: Int
  enterprise_videos_gte?: Int
  enterprise_photography?: Int
  enterprise_photography_not?: Int
  enterprise_photography_in?: Int[] | Int
  enterprise_photography_not_in?: Int[] | Int
  enterprise_photography_lt?: Int
  enterprise_photography_lte?: Int
  enterprise_photography_gt?: Int
  enterprise_photography_gte?: Int
  post?: Int
  post_not?: Int
  post_in?: Int[] | Int
  post_not_in?: Int[] | Int
  post_lt?: Int
  post_lte?: Int
  post_gt?: Int
  post_gte?: Int
  videoMinute?: Int
  videoMinute_not?: Int
  videoMinute_in?: Int[] | Int
  videoMinute_not_in?: Int[] | Int
  videoMinute_lt?: Int
  videoMinute_lte?: Int
  videoMinute_gt?: Int
  videoMinute_gte?: Int
  photo?: Int
  photo_not?: Int
  photo_in?: Int[] | Int
  photo_not_in?: Int[] | Int
  photo_lt?: Int
  photo_lte?: Int
  photo_gt?: Int
  photo_gte?: Int
  gif?: Int
  gif_not?: Int
  gif_in?: Int[] | Int
  gif_not_in?: Int[] | Int
  gif_lt?: Int
  gif_lte?: Int
  gif_gt?: Int
  gif_gte?: Int
  discountAfterMonths?: Int
  discountAfterMonths_not?: Int
  discountAfterMonths_in?: Int[] | Int
  discountAfterMonths_not_in?: Int[] | Int
  discountAfterMonths_lt?: Int
  discountAfterMonths_lte?: Int
  discountAfterMonths_gt?: Int
  discountAfterMonths_gte?: Int
  light_discountPerMonth?: Int
  light_discountPerMonth_not?: Int
  light_discountPerMonth_in?: Int[] | Int
  light_discountPerMonth_not_in?: Int[] | Int
  light_discountPerMonth_lt?: Int
  light_discountPerMonth_lte?: Int
  light_discountPerMonth_gt?: Int
  light_discountPerMonth_gte?: Int
  pro_discountPerMonth?: Int
  pro_discountPerMonth_not?: Int
  pro_discountPerMonth_in?: Int[] | Int
  pro_discountPerMonth_not_in?: Int[] | Int
  pro_discountPerMonth_lt?: Int
  pro_discountPerMonth_lte?: Int
  pro_discountPerMonth_gt?: Int
  pro_discountPerMonth_gte?: Int
  enterprise_discountPerMonth?: Int
  enterprise_discountPerMonth_not?: Int
  enterprise_discountPerMonth_in?: Int[] | Int
  enterprise_discountPerMonth_not_in?: Int[] | Int
  enterprise_discountPerMonth_lt?: Int
  enterprise_discountPerMonth_lte?: Int
  enterprise_discountPerMonth_gt?: Int
  enterprise_discountPerMonth_gte?: Int
}

export interface FileCreateOneInput {
  create?: FileCreateInput
  connect?: FileWhereUniqueInput
}

export interface ApplicationSettingWhereUniqueInput {
  index?: Int
}

export interface FileCreateInput {
  name: String
  checksum: String
}

export interface CouponWhereUniqueInput {
  id?: ID_Input
  coupon?: String
}

export interface PostCreateInput {
  title: String
  body: String
  badge?: String
  badgeColorClass?: String
  thumbnailBody: String
  author: UserCreateOneWithoutPostsInput
  thumbnailImage?: FileCreateOneInput
}

export interface CouponUpsertWithoutUsedInInput {
  update: CouponUpdateWithoutUsedInDataInput
  create: CouponCreateWithoutUsedInInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserCreateWithoutPostsInput {
  name: String
  username: String
  password: String
  lastLogin?: DateTime
  permissions?: UserCreatepermissionsInput
}

export interface ClientApplicationUpdateWithoutCouponDataInput {
  name?: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth?: Int
  photography?: Int
  gifs?: Int
  videos?: Int
  videoMinutesCount?: Int
  website?: Boolean
  hasHost?: Boolean
  hasDomain?: Boolean
  dealMonths?: Int
  package?: Package
  totalPrice?: Int
}

export interface CouponCreateWithoutUsedInInput {
  coupon: String
  value: Int
  discountType: DiscountType
  author: UserCreateOneInput
}

export interface CouponWhereInput {
  AND?: CouponWhereInput[] | CouponWhereInput
  OR?: CouponWhereInput[] | CouponWhereInput
  NOT?: CouponWhereInput[] | CouponWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  coupon?: String
  coupon_not?: String
  coupon_in?: String[] | String
  coupon_not_in?: String[] | String
  coupon_lt?: String
  coupon_lte?: String
  coupon_gt?: String
  coupon_gte?: String
  coupon_contains?: String
  coupon_not_contains?: String
  coupon_starts_with?: String
  coupon_not_starts_with?: String
  coupon_ends_with?: String
  coupon_not_ends_with?: String
  value?: Int
  value_not?: Int
  value_in?: Int[] | Int
  value_not_in?: Int[] | Int
  value_lt?: Int
  value_lte?: Int
  value_gt?: Int
  value_gte?: Int
  discountType?: DiscountType
  discountType_not?: DiscountType
  discountType_in?: DiscountType[] | DiscountType
  discountType_not_in?: DiscountType[] | DiscountType
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  usedIn?: ClientApplicationWhereInput
  author?: UserWhereInput
}

export interface JobApplicationCreatepositionsInput {
  set?: JobPosition[] | JobPosition
}

export interface VariableSubscriptionWhereInput {
  AND?: VariableSubscriptionWhereInput[] | VariableSubscriptionWhereInput
  OR?: VariableSubscriptionWhereInput[] | VariableSubscriptionWhereInput
  NOT?: VariableSubscriptionWhereInput[] | VariableSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: VariableWhereInput
}

export interface CouponCreateInput {
  coupon: String
  value: Int
  discountType: DiscountType
  usedIn?: ClientApplicationCreateOneWithoutCouponInput
  author: UserCreateOneInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface CouponUpdateOneWithoutUsedInInput {
  create?: CouponCreateWithoutUsedInInput
  connect?: CouponWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: CouponUpdateWithoutUsedInDataInput
  upsert?: CouponUpsertWithoutUsedInInput
}

export interface ClientApplicationCreateInput {
  name: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
  coupon?: CouponCreateOneWithoutUsedInInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface ClientApplicationCreateWithoutCouponInput {
  name: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
}

export interface ClientApplicationCreateOneWithoutCouponInput {
  create?: ClientApplicationCreateWithoutCouponInput
  connect?: ClientApplicationWhereUniqueInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface ContactApplicationWhereUniqueInput {
  id?: ID_Input
}

export interface ContactApplicationUpdateInput {
  name?: String
  phoneNumber?: String
  email?: String
  address?: String
  question?: String
  body?: String
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  NOT?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface JobApplicationWhereInput {
  AND?: JobApplicationWhereInput[] | JobApplicationWhereInput
  OR?: JobApplicationWhereInput[] | JobApplicationWhereInput
  NOT?: JobApplicationWhereInput[] | JobApplicationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  phoneNumber?: String
  phoneNumber_not?: String
  phoneNumber_in?: String[] | String
  phoneNumber_not_in?: String[] | String
  phoneNumber_lt?: String
  phoneNumber_lte?: String
  phoneNumber_gt?: String
  phoneNumber_gte?: String
  phoneNumber_contains?: String
  phoneNumber_not_contains?: String
  phoneNumber_starts_with?: String
  phoneNumber_not_starts_with?: String
  phoneNumber_ends_with?: String
  phoneNumber_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  address?: String
  address_not?: String
  address_in?: String[] | String
  address_not_in?: String[] | String
  address_lt?: String
  address_lte?: String
  address_gt?: String
  address_gte?: String
  address_contains?: String
  address_not_contains?: String
  address_starts_with?: String
  address_not_starts_with?: String
  address_ends_with?: String
  address_not_ends_with?: String
  linkedIn?: String
  linkedIn_not?: String
  linkedIn_in?: String[] | String
  linkedIn_not_in?: String[] | String
  linkedIn_lt?: String
  linkedIn_lte?: String
  linkedIn_gt?: String
  linkedIn_gte?: String
  linkedIn_contains?: String
  linkedIn_not_contains?: String
  linkedIn_starts_with?: String
  linkedIn_not_starts_with?: String
  linkedIn_ends_with?: String
  linkedIn_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  resume?: FileWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ContactApplication extends Node {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  question: String
  body: String
}

export interface FilePreviousValues {
  id: ID_Output
  name: String
  checksum: String
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  name: String
  username: String
  password: String
  permissions?: Permission[]
  posts?: Post[]
  lastLogin?: DateTime
}

export interface AggregateFile {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

export interface ApplicationSetting {
  index: Int
  light_postsPerMonth: Int
  light_gifs: Int
  light_videos: Int
  light_photography: Int
  pro_postsPerMonth: Int
  pro_gifs: Int
  pro_videos: Int
  pro_photography: Int
  enterprise_postsPerMonth: Int
  enterprise_gifs: Int
  enterprise_videos: Int
  enterprise_photography: Int
  post: Int
  videoMinute: Int
  photo: Int
  gif: Int
  discountAfterMonths: Int
  light_discountPerMonth: Int
  pro_discountPerMonth: Int
  enterprise_discountPerMonth: Int
}

/*
 * An edge in a connection.

 */
export interface ContactApplicationEdge {
  node: ContactApplication
  cursor: String
}

export interface AggregateContactApplication {
  count: Int
}

export interface File extends Node {
  id: ID_Output
  name: String
  checksum: String
}

/*
 * A connection to a list of items.

 */
export interface ContactApplicationConnection {
  pageInfo: PageInfo
  edges: ContactApplicationEdge[]
  aggregate: AggregateContactApplication
}

export interface AggregateClientApplication {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ClientApplicationEdge {
  node: ClientApplication
  cursor: String
}

export interface AggregateCoupon {
  count: Int
}

export interface VariableSubscriptionPayload {
  mutation: MutationType
  node?: Variable
  updatedFields?: String[]
  previousValues?: VariablePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CouponConnection {
  pageInfo: PageInfo
  edges: CouponEdge[]
  aggregate: AggregateCoupon
}

export interface VariablePreviousValues {
  index: Int
  email?: String
  phone1?: String
  phone2?: String
  address?: String
  facebook?: String
  instagram?: String
  linkedIn?: String
  youtube?: String
  contactEmail?: String
  clientsEmail?: String
  jobsEmail?: String
  additionalTitle?: String
  additionalBody?: String
}

/*
 * An edge in a connection.

 */
export interface JobApplicationEdge {
  node: JobApplication
  cursor: String
}

export interface ClientApplication extends Node {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
  createdAt: DateTime
  coupon?: Coupon
}

export interface AggregatePost {
  count: Int
}

export interface ApplicationSettingSubscriptionPayload {
  mutation: MutationType
  node?: ApplicationSetting
  updatedFields?: String[]
  previousValues?: ApplicationSettingPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface ApplicationSettingPreviousValues {
  index: Int
  light_postsPerMonth: Int
  light_gifs: Int
  light_videos: Int
  light_photography: Int
  pro_postsPerMonth: Int
  pro_gifs: Int
  pro_videos: Int
  pro_photography: Int
  enterprise_postsPerMonth: Int
  enterprise_gifs: Int
  enterprise_videos: Int
  enterprise_photography: Int
  post: Int
  videoMinute: Int
  photo: Int
  gif: Int
  discountAfterMonths: Int
  light_discountPerMonth: Int
  pro_discountPerMonth: Int
  enterprise_discountPerMonth: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface Coupon extends Node {
  id: ID_Output
  coupon: String
  value: Int
  discountType: DiscountType
  usedIn?: ClientApplication
  author: User
  createdAt: DateTime
}

export interface AggregateApplicationSetting {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ApplicationSettingConnection {
  pageInfo: PageInfo
  edges: ApplicationSettingEdge[]
  aggregate: AggregateApplicationSetting
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  username: String
  password: String
  permissions?: Permission[]
  lastLogin?: DateTime
}

/*
 * An edge in a connection.

 */
export interface VariableEdge {
  node: Variable
  cursor: String
}

export interface Post extends Node {
  id: ID_Output
  title: String
  body: String
  author: User
  badge?: String
  badgeColorClass?: String
  createdAt: DateTime
  updatedAt: DateTime
  thumbnailBody: String
  thumbnailImage?: File
}

/*
 * A connection to a list of items.

 */
export interface VariableConnection {
  pageInfo: PageInfo
  edges: VariableEdge[]
  aggregate: AggregateVariable
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  body: String
  badge?: String
  badgeColorClass?: String
  createdAt: DateTime
  updatedAt: DateTime
  thumbnailBody: String
}

/*
 * A connection to a list of items.

 */
export interface ClientApplicationConnection {
  pageInfo: PageInfo
  edges: ClientApplicationEdge[]
  aggregate: AggregateClientApplication
}

export interface ContactApplicationPreviousValues {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  question: String
  body: String
}

export interface AggregateJobApplication {
  count: Int
}

export interface JobApplicationSubscriptionPayload {
  mutation: MutationType
  node?: JobApplication
  updatedFields?: String[]
  previousValues?: JobApplicationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface JobApplicationPreviousValues {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  positions?: JobPosition[]
  linkedIn?: String
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface ContactApplicationSubscriptionPayload {
  mutation: MutationType
  node?: ContactApplication
  updatedFields?: String[]
  previousValues?: ContactApplicationPreviousValues
}

export interface AggregateVariable {
  count: Int
}

export interface CouponSubscriptionPayload {
  mutation: MutationType
  node?: Coupon
  updatedFields?: String[]
  previousValues?: CouponPreviousValues
}

export interface Variable {
  index: Int
  email?: String
  phone1?: String
  phone2?: String
  address?: String
  facebook?: String
  instagram?: String
  linkedIn?: String
  youtube?: String
  contactEmail?: String
  clientsEmail?: String
  jobsEmail?: String
  additionalTitle?: String
  additionalBody?: String
}

/*
 * An edge in a connection.

 */
export interface CouponEdge {
  node: Coupon
  cursor: String
}

export interface ClientApplicationPreviousValues {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  facebook?: String
  address?: String
  postsPerMonth: Int
  photography: Int
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealMonths: Int
  package: Package
  totalPrice: Int
  createdAt: DateTime
}

export interface ClientApplicationSubscriptionPayload {
  mutation: MutationType
  node?: ClientApplication
  updatedFields?: String[]
  previousValues?: ClientApplicationPreviousValues
}

export interface JobApplication extends Node {
  id: ID_Output
  name: String
  phoneNumber?: String
  email?: String
  address?: String
  positions?: JobPosition[]
  resume: File
  linkedIn?: String
  createdAt: DateTime
}

export interface CouponPreviousValues {
  id: ID_Output
  coupon: String
  value: Int
  discountType: DiscountType
  createdAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface JobApplicationConnection {
  pageInfo: PageInfo
  edges: JobApplicationEdge[]
  aggregate: AggregateJobApplication
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface ApplicationSettingEdge {
  node: ApplicationSetting
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string