/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n": types.RegisterDocument,
    "\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n": types.RequestResetPasswordDocument,
    "\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n": types.ResetPasswordDocument,
    "\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.BotConfigDocument,
    "\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n": types.BotConfigsDocument,
    "\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n": types.CreateBotConfigDocument,
    "\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateBotConfigDocument,
    "\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n": types.DeleteBotConfigDocument,
    "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        ghlAccess {\n          id\n          locationId\n          refreshToken\n          scope\n        }\n        aiKey {\n          id\n          openapiKey\n        }\n      }\n    }\n  }\n": types.UserDocument,
    "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateUserDocument,
    "\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n": types.UpdateAiKeyDocument,
    "\n  query Ghl_me {\n    ghl_me {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n    }\n  }\n": types.Ghl_MeDocument,
    "\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n": types.Ghl_GetContactsDocument,
    "\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n": types.Ghl_SendMessageDocument,
    "\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n": types.ChatSessionDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Login($email: String!, $password: String!) {\n    authclient_login(email: $email, password: $password) {\n      ... on ClientItemAuthenticationWithPasswordSuccess {\n        sessionToken\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"): (typeof documents)["\n  mutation Register(\n    $email: String!\n    $password: String!\n    $firstName: String\n    $lastName: String\n  ) {\n    authclient_register(\n      email: $email\n      password: $password\n      firstName: $firstName\n      lastName: $lastName\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"): (typeof documents)["\n  mutation RequestResetPassword($email: String!) {\n    authclient_requestPasswordReset(email: $email)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"): (typeof documents)["\n  mutation ResetPassword($token: String!, $password: String!) {\n    authclient_resetPassword(token: $token, password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query BotConfig($where: BotConfigWhereUniqueInput!) {\n    botConfig(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"): (typeof documents)["\n  query BotConfigs($where: BotConfigWhereInput!) {\n    botConfigs(where: $where) {\n      id\n      name\n      companyStatement\n      tonestyle\n      priorityPlan\n      healthInsuranceCarriers\n      presentationStrategy\n      specificQuestions\n      summaryPrompt\n      welcomeMessage\n      welcomeMessageFormat\n      noZipCodeMessage\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBotConfig($data: BotConfigCreateInput!) {\n    createBotConfig(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateBotConfig(\n    $where: BotConfigWhereUniqueInput!\n    $data: BotConfigUpdateInput!\n  ) {\n    updateBotConfig(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteBotConfig($where: BotConfigWhereUniqueInput!) {\n    deleteBotConfig(where: $where) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        ghlAccess {\n          id\n          locationId\n          refreshToken\n          scope\n        }\n        aiKey {\n          id\n          openapiKey\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query User {\n    authenticatedItem {\n      ... on User {\n        id\n        name\n        lastName\n        displayName\n        email\n        role\n        createdAt\n        ghlAccess {\n          id\n          locationId\n          refreshToken\n          scope\n        }\n        aiKey {\n          id\n          openapiKey\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n    updateUser(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateAIKey(\n    $where: AIKeyWhereUniqueInput!\n    $data: AIKeyUpdateInput!\n  ) {\n    updateAIKey(where: $where, data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Ghl_me {\n    ghl_me {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n    }\n  }\n"): (typeof documents)["\n  query Ghl_me {\n    ghl_me {\n      name\n      email\n      firstName\n      lastName\n      phone\n      address\n      state\n      country\n      postalCode\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n"): (typeof documents)["\n  query ghl_getContacts($input: Ghl_getContactsInput!) {\n    ghl_getContacts(input: $input) {\n      contacts {\n        id\n        locationId\n        email\n        timezone\n        country\n        source\n        dateAdded\n        businessId\n        firstName\n        lastName\n        contactName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n"): (typeof documents)["\n  mutation Ghl_sendMessage($input: Ghl_sendMessageInput!) {\n    ghl_sendMessage(input: $input) {\n      message\n      contactID\n      thread\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n"): (typeof documents)["\n  query ChatSession($where: ChatSessionWhereUniqueInput!) {\n    chatSession(where: $where) {\n      sessionData\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;