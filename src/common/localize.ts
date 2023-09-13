// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { l10n } from 'vscode';

// Most messages are re-used, hence keep them in a single place and re-use.
export namespace Localized {
    export const OutputChannelName = l10n.t('JupyterHub');
    export const ConnectingToJupyterServer = l10n.t('Connecting to Jupyter Server');
    export const KernelActionSourceTitle = l10n.t('Existing JupyterHub Server...');
    export const labelOfCommandToEnterUrl = l10n.t('Enter the Url of the running JupyterHub Server...');
    export const placeholderOfInputBoxToEnterUrl = l10n.t('Enter the url of the running JupyterHub Server');
    export const titleOfInputBoxToEnterUrl = l10n.t('Enter the Url of the running JupyterHub Server');
    export const captureUserNameTitle = 'Enter your user name for the JupyterHub Server';
    export const captureUserNamePrompt = 'Enter your user name';
    export const capturePasswordTitle = 'Enter your password for the JupyterHub Server';
    export const capturePasswordPrompt = 'Enter your password';
    export const usernamePasswordAuthFailure = l10n.t('Invalid username or password.');
    export const apiTokenAuthFailure = l10n.t('Invalid API Token.');
    export const jupyterSelfCertFail = (errorMessage: string) =>
        l10n.t(
            'The security certificate used by server {0} was not issued by a trusted certificate authority.\r\nThis may indicate an attempt to steal your information.\r\nDo you want to enable the Allow Unauthorized Remote Connection setting for this workspace to allow you to connect?',
            errorMessage
        );
    export const jupyterExpiredCertFail = (errorMessage: string) =>
        l10n.t(
            'The security certificate used by server {0} has expired.\r\nThis may indicate an attempt to steal your information.\r\nDo you want to enable the Allow Unauthorized Remote Connection setting for this workspace to allow you to connect?',
            errorMessage
        );
    export const jupyterSelfCertFailErrorMessageOnly = l10n.t(
        'The security certificate used by server was not issued by a trusted certificate authority.\r\nThis may indicate an attempt to steal your information.'
    );
    export const jupyterSelfCertExpiredErrorMessageOnly = l10n.t(
        'The security certificate used by server has expired.\r\nThis may indicate an attempt to steal your information.'
    );
    export const jupyterSelfCertEnable = l10n.t('Yes, connect anyway');
    export const jupyterSelfCertClose = l10n.t('No, close the connection');
    export const connectToToTheJupyterServer = (url: string) =>
        new URL(url).protocol.toLowerCase() === 'http:'
            ? l10n.t('Connect over insecure connection {0}', url)
            : l10n.t('Connect to the JupyterHub server {0}', url);
    export const jupyterSelectURIInvalidURI = l10n.t('Invalid Url specified');
    export const invalidJupyterHubUrl = l10n.t('Invalid JupyterHub Url specified');
    export const jupyterRenameServer = l10n.t('Change Server Display Name (Leave Blank To Use Url)');
    export const remoteJupyterConnectionFailedWithoutServerWithError = (errorMessage: string) =>
        l10n.t('Connection failure. Verify the server is running and reachable. ({0}).', errorMessage);
    export const remoteJupyterConnectionFailedWithoutServerWithErrorWeb = (errorMessage: string) =>
        l10n.t(
            'Connection failure. Verify the server is running and reachable from a browser. ({0}). \nWhen connecting from vscode.dev Jupyter servers must be started with specific options to connect. \nClick [here](https://aka.ms/vscjremoteweb) for more information.',
            errorMessage
        );
    export const pickAnOptionForInsecureConnection = l10n.t('Pick an option');
    export const howWouldYouLikeToConnectToJupyterHubTitle = l10n.t('Authentication');
    export const howWouldYouLikeToConnectToJupyterHubPlaceholder = l10n.t('Choose an option');
    export const authMethodUserNamePwd = l10n.t('Username and password');
    export const authMethodApiToken = l10n.t('API Token');
    export const enterApiQuickPickTitle = l10n.t('Enter the API Token');
    export const enterApiQuickPickPlaceholder = l10n.t('API Token');
    export const enterApiQuickPickEmptyErrorMessage = l10n.t('API Token cannot be empty');
    export const emptyUserNameErrorMessage = l10n.t('Username cannot be empty');
    export const emptyPasswordErrorMessage = l10n.t('Password cannot be empty');
    export const authMethodApiTokenMoreInfoTooltip = l10n.t('More Info');
}
