import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    settingses: <T = Settings[]>(args: { where?: SettingsWhereInput, orderBy?: SettingsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    posts: <T = Post[]>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobApplicaions: <T = JobApplicaion[]>(args: { where?: JobApplicaionWhereInput, orderBy?: JobApplicaionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientApplications: <T = ClientApplication[]>(args: { where?: ClientApplicationWhereInput, orderBy?: ClientApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactApplications: <T = ContactApplication[]>(args: { where?: ContactApplicationWhereInput, orderBy?: ContactApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    settings: <T = Settings | null>(args: { where: SettingsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    post: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    settingsesConnection: <T = SettingsConnection>(args: { where?: SettingsWhereInput, orderBy?: SettingsOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    postsConnection: <T = PostConnection>(args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobApplicaionsConnection: <T = JobApplicaionConnection>(args: { where?: JobApplicaionWhereInput, orderBy?: JobApplicaionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clientApplicationsConnection: <T = ClientApplicationConnection>(args: { where?: ClientApplicationWhereInput, orderBy?: ClientApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    contactApplicationsConnection: <T = ContactApplicationConnection>(args: { where?: ContactApplicationWhereInput, orderBy?: ContactApplicationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createSettings: <T = Settings>(args: { data: SettingsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPost: <T = Post>(args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJobApplicaion: <T = JobApplicaion>(args: { data: JobApplicaionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createClientApplication: <T = ClientApplication>(args: { data: ClientApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createContactApplication: <T = ContactApplication>(args: { data: ContactApplicationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSettings: <T = Settings | null>(args: { data: SettingsUpdateInput, where: SettingsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePost: <T = Post | null>(args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSettings: <T = Settings | null>(args: { where: SettingsWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePost: <T = Post | null>(args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSettings: <T = Settings>(args: { where: SettingsWhereUniqueInput, create: SettingsCreateInput, update: SettingsUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPost: <T = Post>(args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySettingses: <T = BatchPayload>(args: { data: SettingsUpdateInput, where?: SettingsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPosts: <T = BatchPayload>(args: { data: PostUpdateInput, where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobApplicaions: <T = BatchPayload>(args: { data: JobApplicaionUpdateInput, where?: JobApplicaionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyClientApplications: <T = BatchPayload>(args: { data: ClientApplicationUpdateInput, where?: ClientApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyContactApplications: <T = BatchPayload>(args: { data: ContactApplicationUpdateInput, where?: ContactApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySettingses: <T = BatchPayload>(args: { where?: SettingsWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPosts: <T = BatchPayload>(args: { where?: PostWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobApplicaions: <T = BatchPayload>(args: { where?: JobApplicaionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyClientApplications: <T = BatchPayload>(args: { where?: ClientApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyContactApplications: <T = BatchPayload>(args: { where?: ContactApplicationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    settings: <T = SettingsSubscriptionPayload | null>(args: { where?: SettingsSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    post: <T = PostSubscriptionPayload | null>(args: { where?: PostSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    jobApplicaion: <T = JobApplicaionSubscriptionPayload | null>(args: { where?: JobApplicaionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    clientApplication: <T = ClientApplicationSubscriptionPayload | null>(args: { where?: ClientApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    contactApplication: <T = ContactApplicationSubscriptionPayload | null>(args: { where?: ContactApplicationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Settings: (where?: SettingsWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Post: (where?: PostWhereInput) => Promise<boolean>
  JobApplicaion: (where?: JobApplicaionWhereInput) => Promise<boolean>
  ClientApplication: (where?: ClientApplicationWhereInput) => Promise<boolean>
  ContactApplication: (where?: ContactApplicationWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateClientApplication {
  count: Int!
}

type AggregateContactApplication {
  count: Int!
}

type AggregateJobApplicaion {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateSettings {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type ClientApplication {
  postsPerMonth: Int!
  photography: Boolean!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealYears: Int!
  package: [Package!]
  totalPrice: Int!
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
  postsPerMonth: Int!
  photography: Boolean!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealYears: Int!
  totalPrice: Int!
  package: ClientApplicationCreatepackageInput
}

input ClientApplicationCreatepackageInput {
  set: [Package!]
}

"""An edge in a connection."""
type ClientApplicationEdge {
  """The item at the end of the edge."""
  node: ClientApplication!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ClientApplicationOrderByInput {
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
  dealYears_ASC
  dealYears_DESC
  totalPrice_ASC
  totalPrice_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ClientApplicationPreviousValues {
  postsPerMonth: Int!
  photography: Boolean!
  gifs: Int!
  videos: Int!
  videoMinutesCount: Int!
  website: Boolean!
  hasHost: Boolean!
  hasDomain: Boolean!
  dealYears: Int!
  package: [Package!]
  totalPrice: Int!
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
  postsPerMonth: Int
  photography: Boolean
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealYears: Int
  totalPrice: Int
  package: ClientApplicationUpdatepackageInput
}

input ClientApplicationUpdatepackageInput {
  set: [Package!]
}

input ClientApplicationWhereInput {
  """Logical AND on all given filters."""
  AND: [ClientApplicationWhereInput!]

  """Logical OR on all given filters."""
  OR: [ClientApplicationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ClientApplicationWhereInput!]
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
  photography: Boolean

  """All values that are not equal to given value."""
  photography_not: Boolean
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
  dealYears: Int

  """All values that are not equal to given value."""
  dealYears_not: Int

  """All values that are contained in given list."""
  dealYears_in: [Int!]

  """All values that are not contained in given list."""
  dealYears_not_in: [Int!]

  """All values less than the given value."""
  dealYears_lt: Int

  """All values less than or equal the given value."""
  dealYears_lte: Int

  """All values greater than the given value."""
  dealYears_gt: Int

  """All values greater than or equal the given value."""
  dealYears_gte: Int
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
}

type ContactApplication {
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
  question_ASC
  question_DESC
  body_ASC
  body_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ContactApplicationPreviousValues {
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

scalar DateTime

type JobApplicaion {
  firstName: String!
  middleName: String!
  lastName: String!
  positions: [JobPosition!]
  resume: String!
  linkedIn: String
}

"""A connection to a list of items."""
type JobApplicaionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobApplicaionEdge]!
  aggregate: AggregateJobApplicaion!
}

input JobApplicaionCreateInput {
  firstName: String!
  middleName: String!
  lastName: String!
  resume: String!
  linkedIn: String
  positions: JobApplicaionCreatepositionsInput
}

input JobApplicaionCreatepositionsInput {
  set: [JobPosition!]
}

"""An edge in a connection."""
type JobApplicaionEdge {
  """The item at the end of the edge."""
  node: JobApplicaion!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobApplicaionOrderByInput {
  firstName_ASC
  firstName_DESC
  middleName_ASC
  middleName_DESC
  lastName_ASC
  lastName_DESC
  resume_ASC
  resume_DESC
  linkedIn_ASC
  linkedIn_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type JobApplicaionPreviousValues {
  firstName: String!
  middleName: String!
  lastName: String!
  positions: [JobPosition!]
  resume: String!
  linkedIn: String
}

type JobApplicaionSubscriptionPayload {
  mutation: MutationType!
  node: JobApplicaion
  updatedFields: [String!]
  previousValues: JobApplicaionPreviousValues
}

input JobApplicaionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobApplicaionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobApplicaionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobApplicaionSubscriptionWhereInput!]

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
  node: JobApplicaionWhereInput
}

input JobApplicaionUpdateInput {
  firstName: String
  middleName: String
  lastName: String
  resume: String
  linkedIn: String
  positions: JobApplicaionUpdatepositionsInput
}

input JobApplicaionUpdatepositionsInput {
  set: [JobPosition!]
}

input JobApplicaionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobApplicaionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobApplicaionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobApplicaionWhereInput!]
  firstName: String

  """All values that are not equal to given value."""
  firstName_not: String

  """All values that are contained in given list."""
  firstName_in: [String!]

  """All values that are not contained in given list."""
  firstName_not_in: [String!]

  """All values less than the given value."""
  firstName_lt: String

  """All values less than or equal the given value."""
  firstName_lte: String

  """All values greater than the given value."""
  firstName_gt: String

  """All values greater than or equal the given value."""
  firstName_gte: String

  """All values containing the given string."""
  firstName_contains: String

  """All values not containing the given string."""
  firstName_not_contains: String

  """All values starting with the given string."""
  firstName_starts_with: String

  """All values not starting with the given string."""
  firstName_not_starts_with: String

  """All values ending with the given string."""
  firstName_ends_with: String

  """All values not ending with the given string."""
  firstName_not_ends_with: String
  middleName: String

  """All values that are not equal to given value."""
  middleName_not: String

  """All values that are contained in given list."""
  middleName_in: [String!]

  """All values that are not contained in given list."""
  middleName_not_in: [String!]

  """All values less than the given value."""
  middleName_lt: String

  """All values less than or equal the given value."""
  middleName_lte: String

  """All values greater than the given value."""
  middleName_gt: String

  """All values greater than or equal the given value."""
  middleName_gte: String

  """All values containing the given string."""
  middleName_contains: String

  """All values not containing the given string."""
  middleName_not_contains: String

  """All values starting with the given string."""
  middleName_starts_with: String

  """All values not starting with the given string."""
  middleName_not_starts_with: String

  """All values ending with the given string."""
  middleName_ends_with: String

  """All values not ending with the given string."""
  middleName_not_ends_with: String
  lastName: String

  """All values that are not equal to given value."""
  lastName_not: String

  """All values that are contained in given list."""
  lastName_in: [String!]

  """All values that are not contained in given list."""
  lastName_not_in: [String!]

  """All values less than the given value."""
  lastName_lt: String

  """All values less than or equal the given value."""
  lastName_lte: String

  """All values greater than the given value."""
  lastName_gt: String

  """All values greater than or equal the given value."""
  lastName_gte: String

  """All values containing the given string."""
  lastName_contains: String

  """All values not containing the given string."""
  lastName_not_contains: String

  """All values starting with the given string."""
  lastName_starts_with: String

  """All values not starting with the given string."""
  lastName_not_starts_with: String

  """All values ending with the given string."""
  lastName_ends_with: String

  """All values not ending with the given string."""
  lastName_not_ends_with: String
  resume: String

  """All values that are not equal to given value."""
  resume_not: String

  """All values that are contained in given list."""
  resume_in: [String!]

  """All values that are not contained in given list."""
  resume_not_in: [String!]

  """All values less than the given value."""
  resume_lt: String

  """All values less than or equal the given value."""
  resume_lte: String

  """All values greater than the given value."""
  resume_gt: String

  """All values greater than or equal the given value."""
  resume_gte: String

  """All values containing the given string."""
  resume_contains: String

  """All values not containing the given string."""
  resume_not_contains: String

  """All values starting with the given string."""
  resume_starts_with: String

  """All values not starting with the given string."""
  resume_not_starts_with: String

  """All values ending with the given string."""
  resume_ends_with: String

  """All values not ending with the given string."""
  resume_not_ends_with: String
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
  createSettings(data: SettingsCreateInput!): Settings!
  createUser(data: UserCreateInput!): User!
  createPost(data: PostCreateInput!): Post!
  createJobApplicaion(data: JobApplicaionCreateInput!): JobApplicaion!
  createClientApplication(data: ClientApplicationCreateInput!): ClientApplication!
  createContactApplication(data: ContactApplicationCreateInput!): ContactApplication!
  updateSettings(data: SettingsUpdateInput!, where: SettingsWhereUniqueInput!): Settings
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  deleteSettings(where: SettingsWhereUniqueInput!): Settings
  deleteUser(where: UserWhereUniqueInput!): User
  deletePost(where: PostWhereUniqueInput!): Post
  upsertSettings(where: SettingsWhereUniqueInput!, create: SettingsCreateInput!, update: SettingsUpdateInput!): Settings!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  updateManySettingses(data: SettingsUpdateInput!, where: SettingsWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  updateManyJobApplicaions(data: JobApplicaionUpdateInput!, where: JobApplicaionWhereInput): BatchPayload!
  updateManyClientApplications(data: ClientApplicationUpdateInput!, where: ClientApplicationWhereInput): BatchPayload!
  updateManyContactApplications(data: ContactApplicationUpdateInput!, where: ContactApplicationWhereInput): BatchPayload!
  deleteManySettingses(where: SettingsWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  deleteManyJobApplicaions(where: JobApplicaionWhereInput): BatchPayload!
  deleteManyClientApplications(where: ClientApplicationWhereInput): BatchPayload!
  deleteManyContactApplications(where: ContactApplicationWhereInput): BatchPayload!
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
  Administration
  Posts
  JobApplications
  ClientApplications
  ContactApplications
}

type Post implements Node {
  id: ID!
  title: String!
  body: String!
  author(where: UserWhereInput): User!
  isPublished: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  isPublished: Boolean
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  title: String!
  body: String!
  isPublished: Boolean
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
  isPublished_ASC
  isPublished_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PostPreviousValues {
  id: ID!
  title: String!
  body: String!
  isPublished: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  isPublished: Boolean
  author: UserUpdateOneWithoutPostsInput
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
  isPublished: Boolean
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
  isPublished: Boolean

  """All values that are not equal to given value."""
  isPublished_not: Boolean
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
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  settingses(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Settings]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  jobApplicaions(where: JobApplicaionWhereInput, orderBy: JobApplicaionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobApplicaion]!
  clientApplications(where: ClientApplicationWhereInput, orderBy: ClientApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClientApplication]!
  contactApplications(where: ContactApplicationWhereInput, orderBy: ContactApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ContactApplication]!
  settings(where: SettingsWhereUniqueInput!): Settings
  user(where: UserWhereUniqueInput!): User
  post(where: PostWhereUniqueInput!): Post
  settingsesConnection(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SettingsConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  jobApplicaionsConnection(where: JobApplicaionWhereInput, orderBy: JobApplicaionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobApplicaionConnection!
  clientApplicationsConnection(where: ClientApplicationWhereInput, orderBy: ClientApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClientApplicationConnection!
  contactApplicationsConnection(where: ContactApplicationWhereInput, orderBy: ContactApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ContactApplicationConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Settings {
  index: Int!
  email: String!
}

"""A connection to a list of items."""
type SettingsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SettingsEdge]!
  aggregate: AggregateSettings!
}

input SettingsCreateInput {
  index: Int!
  email: String!
}

"""An edge in a connection."""
type SettingsEdge {
  """The item at the end of the edge."""
  node: Settings!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SettingsOrderByInput {
  index_ASC
  index_DESC
  email_ASC
  email_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SettingsPreviousValues {
  index: Int!
  email: String!
}

type SettingsSubscriptionPayload {
  mutation: MutationType!
  node: Settings
  updatedFields: [String!]
  previousValues: SettingsPreviousValues
}

input SettingsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SettingsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SettingsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SettingsSubscriptionWhereInput!]

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
  node: SettingsWhereInput
}

input SettingsUpdateInput {
  index: Int
  email: String
}

input SettingsWhereInput {
  """Logical AND on all given filters."""
  AND: [SettingsWhereInput!]

  """Logical OR on all given filters."""
  OR: [SettingsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SettingsWhereInput!]
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
}

input SettingsWhereUniqueInput {
  index: Int
}

type Subscription {
  settings(where: SettingsSubscriptionWhereInput): SettingsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  jobApplicaion(where: JobApplicaionSubscriptionWhereInput): JobApplicaionSubscriptionPayload
  clientApplication(where: ClientApplicationSubscriptionWhereInput): ClientApplicationSubscriptionPayload
  contactApplication(where: ContactApplicationSubscriptionWhereInput): ContactApplicationSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  username: String!
  password: String!
  permissions: [Permission!]
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
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
  permissions: UserCreatepermissionsInput
  posts: PostCreateManyWithoutAuthorInput
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

input UserUpdateInput {
  name: String
  username: String
  password: String
  permissions: UserUpdatepermissionsInput
  posts: PostUpdateManyWithoutAuthorInput
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
  permissions: UserUpdatepermissionsInput
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
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ClientApplicationOrderByInput =   'postsPerMonth_ASC' |
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
  'dealYears_ASC' |
  'dealYears_DESC' |
  'totalPrice_ASC' |
  'totalPrice_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Permission =   'Administration' |
  'Posts' |
  'JobApplications' |
  'ClientApplications' |
  'ContactApplications'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
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
  'isPublished_ASC' |
  'isPublished_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type JobApplicaionOrderByInput =   'firstName_ASC' |
  'firstName_DESC' |
  'middleName_ASC' |
  'middleName_DESC' |
  'lastName_ASC' |
  'lastName_DESC' |
  'resume_ASC' |
  'resume_DESC' |
  'linkedIn_ASC' |
  'linkedIn_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type JobPosition =   'Media' |
  'Graphics' |
  'Photography' |
  'PublicRelations'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type Package =   'Light' |
  'Pro' |
  'Enterprise'

export type ContactApplicationOrderByInput =   'question_ASC' |
  'question_DESC' |
  'body_ASC' |
  'body_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SettingsOrderByInput =   'index_ASC' |
  'index_DESC' |
  'email_ASC' |
  'email_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface SettingsCreateInput {
  index: Int
  email: String
}

export interface SettingsWhereInput {
  AND?: SettingsWhereInput[] | SettingsWhereInput
  OR?: SettingsWhereInput[] | SettingsWhereInput
  NOT?: SettingsWhereInput[] | SettingsWhereInput
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
}

export interface UserUpdateWithoutPostsDataInput {
  name?: String
  username?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
}

export interface PostCreateInput {
  title: String
  body: String
  isPublished?: Boolean
  author: UserCreateOneWithoutPostsInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutPostsDataInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface PostUpdateInput {
  title?: String
  body?: String
  isPublished?: Boolean
  author?: UserUpdateOneWithoutPostsInput
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

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface JobApplicaionSubscriptionWhereInput {
  AND?: JobApplicaionSubscriptionWhereInput[] | JobApplicaionSubscriptionWhereInput
  OR?: JobApplicaionSubscriptionWhereInput[] | JobApplicaionSubscriptionWhereInput
  NOT?: JobApplicaionSubscriptionWhereInput[] | JobApplicaionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: JobApplicaionWhereInput
}

export interface PostUpdateWithoutAuthorDataInput {
  title?: String
  body?: String
  isPublished?: Boolean
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
  isPublished?: Boolean
  isPublished_not?: Boolean
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
  author?: UserWhereInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
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

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[] | PostUpdateWithWhereUniqueWithoutAuthorInput
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[] | PostUpsertWithWhereUniqueWithoutAuthorInput
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
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface ContactApplicationUpdateInput {
  question?: String
  body?: String
}

export interface UserUpdateInput {
  name?: String
  username?: String
  password?: String
  permissions?: UserUpdatepermissionsInput
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface SettingsWhereUniqueInput {
  index?: Int
}

export interface SettingsUpdateInput {
  index?: Int
  email?: String
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface ContactApplicationCreateInput {
  question: String
  body: String
}

export interface JobApplicaionUpdatepositionsInput {
  set?: JobPosition[] | JobPosition
}

export interface ClientApplicationCreatepackageInput {
  set?: Package[] | Package
}

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface ClientApplicationCreateInput {
  postsPerMonth: Int
  photography: Boolean
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealYears: Int
  totalPrice: Int
  package?: ClientApplicationCreatepackageInput
}

export interface JobApplicaionWhereInput {
  AND?: JobApplicaionWhereInput[] | JobApplicaionWhereInput
  OR?: JobApplicaionWhereInput[] | JobApplicaionWhereInput
  NOT?: JobApplicaionWhereInput[] | JobApplicaionWhereInput
  firstName?: String
  firstName_not?: String
  firstName_in?: String[] | String
  firstName_not_in?: String[] | String
  firstName_lt?: String
  firstName_lte?: String
  firstName_gt?: String
  firstName_gte?: String
  firstName_contains?: String
  firstName_not_contains?: String
  firstName_starts_with?: String
  firstName_not_starts_with?: String
  firstName_ends_with?: String
  firstName_not_ends_with?: String
  middleName?: String
  middleName_not?: String
  middleName_in?: String[] | String
  middleName_not_in?: String[] | String
  middleName_lt?: String
  middleName_lte?: String
  middleName_gt?: String
  middleName_gte?: String
  middleName_contains?: String
  middleName_not_contains?: String
  middleName_starts_with?: String
  middleName_not_starts_with?: String
  middleName_ends_with?: String
  middleName_not_ends_with?: String
  lastName?: String
  lastName_not?: String
  lastName_in?: String[] | String
  lastName_not_in?: String[] | String
  lastName_lt?: String
  lastName_lte?: String
  lastName_gt?: String
  lastName_gte?: String
  lastName_contains?: String
  lastName_not_contains?: String
  lastName_starts_with?: String
  lastName_not_starts_with?: String
  lastName_ends_with?: String
  lastName_not_ends_with?: String
  resume?: String
  resume_not?: String
  resume_in?: String[] | String
  resume_not_in?: String[] | String
  resume_lt?: String
  resume_lte?: String
  resume_gt?: String
  resume_gte?: String
  resume_contains?: String
  resume_not_contains?: String
  resume_starts_with?: String
  resume_not_starts_with?: String
  resume_ends_with?: String
  resume_not_ends_with?: String
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
}

export interface JobApplicaionCreatepositionsInput {
  set?: JobPosition[] | JobPosition
}

export interface ClientApplicationWhereInput {
  AND?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  OR?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  NOT?: ClientApplicationWhereInput[] | ClientApplicationWhereInput
  postsPerMonth?: Int
  postsPerMonth_not?: Int
  postsPerMonth_in?: Int[] | Int
  postsPerMonth_not_in?: Int[] | Int
  postsPerMonth_lt?: Int
  postsPerMonth_lte?: Int
  postsPerMonth_gt?: Int
  postsPerMonth_gte?: Int
  photography?: Boolean
  photography_not?: Boolean
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
  dealYears?: Int
  dealYears_not?: Int
  dealYears_in?: Int[] | Int
  dealYears_not_in?: Int[] | Int
  dealYears_lt?: Int
  dealYears_lte?: Int
  dealYears_gt?: Int
  dealYears_gte?: Int
  totalPrice?: Int
  totalPrice_not?: Int
  totalPrice_in?: Int[] | Int
  totalPrice_not_in?: Int[] | Int
  totalPrice_lt?: Int
  totalPrice_lte?: Int
  totalPrice_gt?: Int
  totalPrice_gte?: Int
}

export interface JobApplicaionCreateInput {
  firstName: String
  middleName: String
  lastName: String
  resume: String
  linkedIn?: String
  positions?: JobApplicaionCreatepositionsInput
}

export interface ContactApplicationWhereInput {
  AND?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
  OR?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
  NOT?: ContactApplicationWhereInput[] | ContactApplicationWhereInput
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

export interface UserCreateWithoutPostsInput {
  name: String
  username: String
  password: String
  permissions?: UserCreatepermissionsInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  username?: String
}

export interface JobApplicaionUpdateInput {
  firstName?: String
  middleName?: String
  lastName?: String
  resume?: String
  linkedIn?: String
  positions?: JobApplicaionUpdatepositionsInput
}

export interface PostCreateWithoutAuthorInput {
  title: String
  body: String
  isPublished?: Boolean
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission
}

export interface UserCreateInput {
  name: String
  username: String
  password: String
  permissions?: UserCreatepermissionsInput
  posts?: PostCreateManyWithoutAuthorInput
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

export interface ClientApplicationUpdateInput {
  postsPerMonth?: Int
  photography?: Boolean
  gifs?: Int
  videos?: Int
  videoMinutesCount?: Int
  website?: Boolean
  hasHost?: Boolean
  hasDomain?: Boolean
  dealYears?: Int
  totalPrice?: Int
  package?: ClientApplicationUpdatepackageInput
}

export interface ClientApplicationUpdatepackageInput {
  set?: Package[] | Package
}

export interface SettingsSubscriptionWhereInput {
  AND?: SettingsSubscriptionWhereInput[] | SettingsSubscriptionWhereInput
  OR?: SettingsSubscriptionWhereInput[] | SettingsSubscriptionWhereInput
  NOT?: SettingsSubscriptionWhereInput[] | SettingsSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SettingsWhereInput
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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface SettingsConnection {
  pageInfo: PageInfo
  edges: SettingsEdge[]
  aggregate: AggregateSettings
}

export interface ContactApplicationPreviousValues {
  question: String
  body: String
}

export interface ContactApplication {
  question: String
  body: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  username: String
  password: String
  permissions?: Permission[]
  posts?: Post[]
}

export interface Settings {
  index: Int
  email: String
}

export interface AggregateContactApplication {
  count: Int
}

export interface ClientApplication {
  postsPerMonth: Int
  photography: Boolean
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealYears: Int
  package?: Package[]
  totalPrice: Int
}

/*
 * A connection to a list of items.

 */
export interface ContactApplicationConnection {
  pageInfo: PageInfo
  edges: ContactApplicationEdge[]
  aggregate: AggregateContactApplication
}

/*
 * An edge in a connection.

 */
export interface ClientApplicationEdge {
  node: ClientApplication
  cursor: String
}

export interface AggregateJobApplicaion {
  count: Int
}

export interface SettingsSubscriptionPayload {
  mutation: MutationType
  node?: Settings
  updatedFields?: String[]
  previousValues?: SettingsPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface JobApplicaionConnection {
  pageInfo: PageInfo
  edges: JobApplicaionEdge[]
  aggregate: AggregateJobApplicaion
}

export interface SettingsPreviousValues {
  index: Int
  email: String
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface AggregatePost {
  count: Int
}

export interface Post extends Node {
  id: ID_Output
  title: String
  body: String
  author: User
  isPublished: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateSettings {
  count: Int
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface ContactApplicationSubscriptionPayload {
  mutation: MutationType
  node?: ContactApplication
  updatedFields?: String[]
  previousValues?: ContactApplicationPreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  username: String
  password: String
  permissions?: Permission[]
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

export interface JobApplicaion {
  firstName: String
  middleName: String
  lastName: String
  positions?: JobPosition[]
  resume: String
  linkedIn?: String
}

/*
 * An edge in a connection.

 */
export interface ContactApplicationEdge {
  node: ContactApplication
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ClientApplicationConnection {
  pageInfo: PageInfo
  edges: ClientApplicationEdge[]
  aggregate: AggregateClientApplication
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface JobApplicaionPreviousValues {
  firstName: String
  middleName: String
  lastName: String
  positions?: JobPosition[]
  resume: String
  linkedIn?: String
}

export interface JobApplicaionSubscriptionPayload {
  mutation: MutationType
  node?: JobApplicaion
  updatedFields?: String[]
  previousValues?: JobApplicaionPreviousValues
}

export interface ClientApplicationSubscriptionPayload {
  mutation: MutationType
  node?: ClientApplication
  updatedFields?: String[]
  previousValues?: ClientApplicationPreviousValues
}

export interface PostPreviousValues {
  id: ID_Output
  title: String
  body: String
  isPublished: Boolean
  createdAt: DateTime
  updatedAt: DateTime
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface JobApplicaionEdge {
  node: JobApplicaion
  cursor: String
}

export interface AggregateClientApplication {
  count: Int
}

export interface ClientApplicationPreviousValues {
  postsPerMonth: Int
  photography: Boolean
  gifs: Int
  videos: Int
  videoMinutesCount: Int
  website: Boolean
  hasHost: Boolean
  hasDomain: Boolean
  dealYears: Int
  package?: Package[]
  totalPrice: Int
}

/*
 * An edge in a connection.

 */
export interface SettingsEdge {
  node: Settings
  cursor: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean