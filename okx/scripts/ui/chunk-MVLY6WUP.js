import{b as k}from"./chunk-DQTCC3FF.js";import{b as p,e as g,f as a,g as h}from"./chunk-O5LVHMPV.js";import{ac as c,ec as C,f as r,fc as u,h as x,nc as T}from"./chunk-CVJKAN5R.js";import{b as H,f as m,l as process,m as n,o}from"./chunk-6V2G2Z5W.js";var l,d,S,A,w,t,P,L,U=H(()=>{"use strict";n();o();T();h();x();l=m(k());C();d="/v1",S="/deposit/plugin",A="/ws/v5/iprivate",w="/cdn/assets/oec/rpc/eth-ledger-bridge-keyring-1212/index.html",t={get walletHost(){let e=p();return e==="kong-proxy.dev-okex.svc.dev.local:8443"?`http://${e}`:`https://${e}`},get walletPrefix(){return`${this.walletHost}${d}${S}`},get configHost(){return`https://${a()}`}},P={get getExtensionVersion(){return`${t.configHost}/cdn/assets/okfe/inner/wallet-config/extensionVersion.json`},get getOnekeyBridgeUrl(){return`${t.configHost}/cdn/assets/okfe/inner/wallet-config/onekeyBridgeUrl.json`},get getCheckCountryLimit(){return`${t.walletHost}/v3/users/mobile/support/common/check-country-limit`},get getBTCUTXO(){return`${t.walletHost}/priapi/v1/wallet/tx/utxo`},get getSpecialUtxoList(){return`${t.walletHost}/priapi/v1/wallet/common/special/utxo`},get getUTXOAsset(){return`${t.walletHost}/priapi/v1/wallet/tx/utxo/protocol/asset`},get postUTXOInfoFromTxs(){return`${t.walletHost}/priapi/v1/wallet/tx/utxo/info`},get manageUTXO(){return`${t.walletHost}/priapi/v1/wallet/tx/utxo/manage`},get doubleCheckUtxo(){return`${t.walletHost}/priapi/v1/wallet/tx/utxo/double/check`},get getValuelessList(){return`${t.walletHost}/priapi/v1/wallet/tx/valueless/nft/list`},get postWalletCreateBatch(){return`${t.walletHost}/priapi/v2/wallet/createBatch`},get deleteWallet(){return`${t.walletHost}/priapi/v2/wallet/deleteWallet`},get getTransactionsUrl(){return`${t.walletPrefix}/list/{chain}/transactions/{address}`},get getSupportCustomChains(){return`${t.walletPrefix}/coins/support/addCoin`},get postAddCoin(){return`${t.walletHost}/priapi/v1/wallet/coin/addCoin`},get postAddCoinBatch(){return`${t.walletPrefix}/coins/addCoin/batch`},get newGetAllAssetsUrl(){return`${t.walletHost}/priapi/v2/wallet/asset/common/all`},get postBalanceDetail(){return`${t.walletPrefix}/asset/balance/detail`},get getCustomCoin(){return`${t.walletPrefix}/coins/getContractTokenInfo`},get getWaxCustomCoin(){return`${t.walletHost}/priapi/v1/wallet/baseEos/coins/getTokenInfo`},get getGasSignInfo(){return`${t.walletPrefix}/coin/{coinId}/address/{address}/signInfo`},get getSignPrompt(){return`${t.walletHost}/priapi/v1/wallet/tx/dapp/sign/prompt`},get postGasLimit(){return`${t.walletPrefix}/gas/gasLimit`},get postTx(){return`${t.walletHost}/priapi/v1/wallet/tx/saveTx`},get postBatchTx(){return`${t.walletHost}/priapi/v1/wallet/tx/batch/saveTx`},get postDexTx(){return`${t.walletHost}/priapi/v1/wallet/tx/common/saveTx`},get postSendEvmInscriptions(){return`${t.walletHost}/priapi/v1/wallet/tx/batch/saveTxV2`},get getCurrenciesUrl(){return`${t.walletPrefix}/currencies`},get postMarketUrl(){return`${t.walletPrefix}/market`},get serverRpcConfigUrl(){return`${t.walletPrefix}/rpc`},get serverPushUrl(){let e=`wss://${g()}`;return process.env.ASSETS_BUILD_TYPE===r.DEV?e="ws://okcoin-pushv5-metax.dev-okex.svc.dev.local:10443":process.env.ASSETS_BUILD_TYPE===r.DAILY&&(e="wss://wsdexpre.coinall.ltd"),`${e}${A}`},i18nConfigUrl(e,v=l.LOCALE_TYPE.default){let s=process.env.ASSETS_BUILD_TYPE,$=s!==r.PUBLISH&&s!==r.PREPUB,i=l.localeConf[e][v],f=`${$?i.preUrl:i.url}?v=${Date.now()}`;return`${t.configHost}${f}`},get postSyncAddresses(){return`${t.walletHost}/priapi/v1/wallet/addresses/sync`},get postSegwitInfo(){return`${t.walletHost}${d}/deposit/wallet/asset/segwit/info`},get legerBridgeUrl(){return u()===c?`http://${a()}${w}`:`${t.configHost}${w}`},get getNftListUrl(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/owned/nft-list`},get getNftCollections(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/queryCollectionView`},get getNftDetail(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/nft/detail`},get getNftValue(){return`${t.walletHost}/v1/deposit/plugin/asset/total`},get postInputDataAnalyse(){return`${t.walletHost}/v1/deposit/plugin/inputData/analyse`},get getDefiListUrl(){return`${t.walletHost}/priapi/v1/wallet/activity/portfolio/list`},get postTxToastCheckUrl(){return`${t.walletPrefix}/coin/{coinId}/tx/txToastCheck`},get getSolanaTokenAccountAddress(){return`${t.walletPrefix}/coin/{coinId}/address/{address}/signToAddressCheck`},get postAllTxListUrl(){return`${t.walletHost}/priapi/v1/wallet/tx/order/list`},get postCoinTxListUrl(){return`${t.walletHost}/priapi/v1/wallet/tx/coin/order/list`},get postTxDetailInfoUrl(){return`${t.walletHost}/priapi/v1/wallet/tx/order/detail`},get postPendingTxTotalUrl(){return`${t.walletPrefix}/tx/pendingtx/total`},get postCloseTranscation(){return`${t.walletHost}/priapi/v1/wallet/tx/close-transaction`},get postRepeatTranscation(){return`${t.walletHost}/priapi/v1/wallet/tx/repeat-broadcast`},get getSolanaTokenAccountAddressWithMint(){return`${t.walletPrefix}/coin/{mint}/address/{address}/signTokenAddressCheck`},get getAptosResisterStatus(){return`${t.walletPrefix}/address/aptosAddressRegisterStatus`},get getAptosABI(){return`${t.walletPrefix}/abi?address={moduleAddress}`},get getAptosGasLimit(){return`${t.walletPrefix}/aptos/dynamicGasLimit`},get domainSecurityLevelUrl(){return`${t.walletPrefix}/domain/check`},get getCoinPrice(){return`${t.walletPrefix}/market/coin/price`},get getDomainAddress(){return`${t.walletHost}/priapi/v1/wallet/address/domain-address`},get getRpcNetworkByChainId(){return`${t.walletPrefix}/common/chains/network/query`},get getTestNets(){return`${t.walletPrefix}/common/test/networks2`},get postAptosNftClaim(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/pendingClaimAssets`},get saveAptosNftSaveOrder(){return`${t.walletHost}/priapi/v1/nft/opSubmit`},get getNftProjectInfo(){return`${t.walletHost}/priapi/v1/nft/project/wallet/info`},get getGasStationSupportChainListUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/chainList`},get getGasStationSupportCoinListUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/allTokens`},get getGasStationSupportAllCoinUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/allNetWorkTokens`},get getSuiMoveCallSignInfoUrl(){return`${t.walletPrefix}/sui/moveCall`},get getSuiTransactionInfo(){return`${t.walletPrefix}/sui/rawTransaction`},get postYieldRecommend(){return`${t.walletHost}/priapi/v1/invest/products/single/coin/recommend/investment/list`},get getChainUrl(){return`${t.walletHost}/v1/deposit/plugin/common/chain/info/new2`},get getGearInformationUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/gearInformation`},get getPriceInfoUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/quote`},get checkAndGetCallDataUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/order/checkAndGetCallData`},get orderSaveUrl(){return`${t.walletHost}/priapi/v1/dx/trade/bridge/gasStation/order/save`},get postAddressRegisterStatus(){return`${t.walletHost}/v1/deposit/plugin/address/addressRegisterStatus`},get postCheckTransfer(){return`${t.walletHost}/v1/deposit/plugin/address/checkTransfer`},get getZKTransferFee(){return`${t.walletHost}/v1/deposit/plugin/address/getZkTransferFee`},get btcNftDetail(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/nft/inscription/detail`},get batchBtcNftDetail(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/nft/inscription/batchGetDetails`},get postExtFee(){return`${t.walletHost}/v1/deposit/plugin/{coinId}/extFee`},get nftFilterChain(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/chains`},get requestSuiMethodUrl(){return`${t.walletHost}/v1/deposit/plugin/address/commonSuiPenetrate`},get requestSuiMethodUrlToFullnode(){return`${t.walletHost}/fullnode/sui/discover/rpc`},get checkDAppUrl(){return`${t.walletHost}/v1/deposit/plugin/address/checkDAppUrl`},get getAptosResourceType(){return`${t.walletHost}/priapi/v1/wallet/rpc/send/aptos/v1/accounts/{creator}/resource/0x3::token::Collections`},get getAptosTable(){return`${t.walletHost}/priapi/v1/wallet/rpc/send/aptos/v1/tables/{handle}/item`},get getChainToken(){return`${t.walletPrefix}/asset/main/token`},get getEvmToken(){return`${t.walletPrefix}/asset/address/tokens`},get postWalletInfo(){return`${t.walletHost}/priapi/v1/wallet/walletInfo`},get getBrcJson(){return`${t.walletHost}/priapi/v1/wallet/tx/brc-json`},get getAssetFromChain(){return`${t.walletHost}/priapi/v1/wallet/asset/queryByAddress`},get getScanStatus(){return`${t.walletHost}/v3/users/mpc-wallet/scan/status`},get getAccountInfo(){return`${t.walletHost}/v3/users/mpc-wallet/mpc-wallet-info`},get syncMpcwallet(){return`${t.walletHost}/priapi/v1/wallet/mpc/derive/sync`},get getUserId(){return`${t.walletHost}/v3/users/security/profile`},get getMevList(){return`${t.walletHost}/priapi/v1/wallet/mev/list`},get postWalletStatus(){return`${t.walletHost}/priapi/v1/wallet/mpc/status`},get postHandShaking(){return`${t.walletHost}/v3/users/mpc-wallet/signature/handshaking`},get postMPCTxAuthen(){return`${t.walletHost}/v3/users/mpc-wallet/signature/transaction`},get postMPCCheck(){return`${t.walletHost}/priapi/v1/wallet/mpc/dapp/check`},get queryAccountExist(){return`${t.walletHost}/priapi/v1/wallet/baseEos/account`},get queryAccountInfo(){return`${t.walletHost}/priapi/v1/wallet/baseEos/res`},get createWaxAccount(){return`${t.walletHost}/priapi/v1/wallet/baseEos/account/self`},get createFreeWaxAccount(){return`${t.walletHost}/priapi/v1/wallet/baseEos/account/free/self`},get queryAccountStatus(){return`${t.walletHost}/priapi/v1/wallet/baseEos/account/status`},get checkAccountPattern(){return`${t.walletHost}/priapi/v1/wallet/baseEos/checkAccountRule`},get commonAccountKeys(){return`${t.walletHost}/priapi/v1/wallet/common/account/keys`},get getCoinInfo(){return`${t.walletHost}/priapi/v1/wallet/coin/info`},get getXRC20ProtocolList(){return`${t.walletHost}/priapi/v1/wallet/coin/protocolList`},get getNFTSignData(){return`${t.walletHost}/priapi/v1/nft/user/sign`},get loginNFT(){return`${t.walletHost}/priapi/v1/nft/user/login`},get changeNFTVisibility(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/hideNft`},get checkHasHiddenNFT(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/owned/exist`},get listCollectedNfts(){return`${t.walletHost}/priapi/v1/nft/wallet/plugin/queryCollectedNfts`},get getPlatformCoinsCDNUrl(){return`${t.walletHost}/priapi/v1/wallet/coins/platform`},get getCustomCoins(){return`${t.walletHost}/priapi/v1/wallet/coins/custom`},get getOneKeyConfig(){return`${t.walletHost}/priapi/v1/wallet/common/one-key/config`},get signMessageDataCheck(){return`${t.walletHost}/priapi/v1/wallet/common/call/data/check`},get getGasReturnCheck(){return`${t.walletHost}/priapi/v1/wallet/activity/gasReturn/check`},get getPendingBRC20BalanceDetail(){return`${t.walletHost}/priapi/v1/wallet/common/pending/balance/detail`},get checkWalletCommonPending(){return`${t.walletHost}/priapi/v1/wallet/common/pending/check`},get checkDynamicValue(){return`${t.walletHost}/priapi/v1/wallet/coin/checkIsDynamicByTokenCoinId`},get approvalRisk(){return`${t.walletHost}/priapi/v1/wallet/approval/project/risk/list`},get getCoinList(){return`${t.walletHost}/priapi/v1/wallet/common/coinByPage`},get getCoinDetail(){return`${t.walletHost}/priapi/v1/wallet/common/coinSingle`},get checkDustForBtcTx(){return`${t.walletHost}/priapi/v1/nft/btc/dust/check`},get saveTxSimple(){return`${t.walletHost}/priapi/v1/wallet/tx/simple/saveTx`},get getAddrBalance(){return`${t.walletHost}/priapi/v2/wallet/asset/confirm/balance`},get getBtcNftList(){return`${t.walletHost}/priapi/v1/wallet/tx/btc-nft`},get getDexSupportChain(){return`${t.walletHost}/priapi/v1/dx/trade/multi/business/chain/list`},get getGasInfo(){return`${t.walletHost}/priapi/v1/wallet/gas/tracker/multi-gas-price`},get getGasTrackerChains(){return`${t.walletHost}/priapi/v1/wallet/gas/tracker/chains`},get postPendingFacetOrder(){return`${t.walletHost}/priapi/v1/dx/trade/multi/post/pending/orders`},get postCheckAddress(){return`${t.walletHost}/priapi/v1/wallet/tx/address/checkAddress`},get postBtcNftStatus(){return`${t.walletHost}/priapi/v1/nft/inscription/inscriptions/check/status`},get getBannerConfig(){return`${t.walletHost}/priapi/v1/wallet/activity/banner/info-list`},get getBtcPendingTx(){return`${t.walletHost}/priapi/v1/wallet/tx/pending-count`},get getRawTxWithTxId(){return`${t.walletHost}/priapi/v1/wallet/tx/signInfo`},get checkNearPublickey(){return`${t.walletHost}/priapi/v1/wallet/address/checkpublickey`},get postBtcAccelerationFeeInfo(){return`${t.walletHost}/priapi/v1/wallet/tx/speedup/fee/rate`},get requestSolanaMethodUrlToFullnode(){return`${t.walletHost}/fullnode/sol/discover/rpc`},get getSolRentBatch(){return`${t.walletHost}/priapi/v1/wallet/common/getSolRentBatch`},get registerCustomCoinAddr(){return`${t.walletHost}/priapi/v2/wallet/coin/addCoinAddr`},get getMarketMap(){return`${t.walletHost}/v1/deposit/coins/price/curve/get-market-url`}},L=P});export{L as a,U as b};

window.inOKXExtension = true;
window.ASSETS_BUILD_TYPE = "publish";

//# sourceMappingURL=chunk-MVLY6WUP.js.map