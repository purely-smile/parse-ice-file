export interface Long {
    high: number;
    low: number;
}
export declare enum termType {
    Owner = 0,
    Waiter = 1,
    Inspector = 2,
}
export declare enum PlanStat {
    PsPause = 0,
    PsActive = 1,
    PsStop = 2,
}
export declare enum PlanType {
    PtCPM = 0,
}
export declare enum GoodOf {
    GoodSku = 0,
    GoodPut = 1,
    GoodBook = 2,
}
export declare enum OrderStat {
    OrdFresh = 0,
    OrdPaid = 1,
}
export declare enum SettleState {
    SettleInActive = 0,
    SettleActive = 1,
    SettleMaintain = 2,
}
export declare enum SystemExpCode {
    DbHalt = 0,
    Unknown = 1,
}
export declare enum RespExpCode {
    DeviceIllegal = 0,
    DeviceActived = 1,
    DeviceFresh = 2,
    FailedTokenGen = 3,
    FailedPrecodeGen = 4,
    RoomCalUnconf = 5,
    TokenExpired = 6,
    TokenNeeded = 7,
    SpaceNotFound = 8,
    IdNotFound = 9,
    InvalidCondition = 10,
    PasswordMissmatch = 11,
    Unauthorized = 12,
    PlotNotEnough = 13,
    IllegalPeroid = 14,
    LackOfRoomCap = 15,
    NotImplementYet = 16,
    RepeatOrder = 17,
    InvalidOrder = 18,
    InvalidPayamo = 19,
    RepeatConfirm = 20,
    SettleNotEmpty = 21,
    RoomNotEmpty = 22,
    ContainsPut = 23,
    InvalidParam = 24,
    IllegalDanmu = 25,
    NoEnoughMoney = 26,
}
export declare enum PlayTime {
    RoomUnit = 0,
    ClockSec = 1,
}
export declare enum ReportLevel {
    WORKING = 1,
    INFO = 2,
    DEBUG = 3,
    TRACE = 4,
}
export declare enum AuditState {
    FRESH = 0,
    WAIT = 1,
    DENY = 2,
    PASSED = 3,
    INVISIBLE = 100,
}
export declare enum PluTyp {
    TypAd = 0,
    TypDanmu = 1,
}
export declare enum PluEvt {
    OnCorp = 0,
    OnOwner = 1,
    OnMarket = 2,
    OnPlat = 3,
}
export declare enum MateType {
    MtPic = 0,
    MtMov = 1,
    MtDm = 2,
    MtClu = 100,
}
export declare enum QuotaStat {
    QsComing = 0,
    QsCancel = 1,
    QsPlaying = 2,
    QsDone = 3,
}
export declare enum TagType {
    TgSpace = 0,
    TgAd = 1,
}
export declare enum IncomeTyp {
    ItNormSold = 0,
    ItAchieve = 1,
    ItDivide = 2,
}
export declare enum CardProp {
    CpPrivate = 0,
    CpCompany = 1,
}
export declare enum WithdrawProc {
    WpVerify = 0,
    WpDeny = 1,
    WpOperator = 2,
    WpDone = 3,
    WpFailed = 4,
}
export declare enum DealType {
    DtOrder = 0,
    DtCharge = 1,
    DtWithdraw = 2,
    DtLimitCoupon = 3,
    DtExchange = 4,
}
export declare enum DealStat {
    DsFresh = 0,
    DsPaid = 1,
    DsCanceled = 2,
}
export declare enum PayStat {
    PsWait = 0,
    PsDone = 1,
    PsFailed = 2,
    PsClosed = 3,
}
export declare enum PayBy {
    PbWxQr = 0,
    PbAlipay = 1,
    PbAliWap = 2,
    PbWxPub = 3,
    PbBalance = 30,
    PbManual = 31,
    PbNone = 100,
}
export interface Clause {
    new (account: Long, resourceSet: Long, cut: number, profit: number, expired: Long): any;
}
export interface Agency {
    new (name: string, location: number, info: string): any;
}
export interface Wine {
    new (account: Long, clause: Long, gerard: Long, resource: Long, cut: number): any;
}
export interface SettleCheck {
    new (sku: Long, act: number, uact: number): any;
}
export interface SettleAlive {
    new (nver: PillarVer, lastConn: Long, aliveToday: number): any;
}
export interface RoomGrpInfo {
    new (name: string, lvl: number, tcrt: Long): any;
}
export interface PermUnit {
    new (typ: MateType, stat: AuditState, resId: Long, roomGrp: Long, opinion: string, tupd: Long): any;
}
export interface MateBody {
    new (name: string, typ: MateType, spec: idSet, segs: number, cont: string, stat: AuditState): any;
}
export interface PlanCond {
    new (costDay: number, minCap: number, from: SyncDate, to: SyncDate, cond: string): any;
}
export interface PlanCont {
    new (mtyp: MateType, mate: Long): any;
}
export interface PlanInfo {
    new (name: string, typ: PlanType, stat: PlanStat, lastOp: Long, tcrt: Long): any;
}
export interface PlanRoom {
    new (valid: boolean, weight: number): any;
}
export interface OrderInfo {
    new (src: GoodOf, price: number, discount: number, stat: OrderStat, goods: idSet, info: string, tCrt: Long): any;
}
export interface PrePut {
    new (roomId: Long, start: SyncDate, end: SyncDate, amo: number): any;
}
export interface StockRes {
    new (start: SyncDate, end: SyncDate, cap: number): any;
}
export interface PillarDef {
    new (wifi: WifiSet, ver: PillarVer, needActive: boolean, preActive: string): any;
}
export interface Danmubody {
    new (ad: Long, info: string, prop: string, start: Long, end: Long, weight: number): any;
}
export interface SettleInfo {
    new (room: Long, space: Long, sku: Long, stat: SettleState): any;
}
export interface SpaceInfo {
    new (name: string, tags: strSet, govern: number, cover: string, state: AuditState, longitude: number, latitude: number): any;
}
export interface RoomInfo {
    new (name: string, sku: Long, actDevice: number, spaceId: Long): any;
}
export interface SkuInfo {
    new (name: string): any;
}
export interface UserInfo {
    new (nick: string, mobile: string): any;
}
export interface PillarVer {
    new (name: string, primary: number, sub: number, devel: number): any;
}
export interface SyncClock {
    new (hour: number, minute: number, second: number): any;
}
export interface SyncDate {
    new (year: number, month: number, day: number): any;
}
export interface PlayUnit {
    new (id: Long, len: number, timeBy: PlayTime): any;
}
export interface BookUnit {
    new (id: Long, play: PlaySet, from: SyncClock, to: SyncClock): any;
}
export interface PlayPlan {
    new (unitTime: number, play: PlaySet, books: BookSet): any;
}
export interface AdUnit {
    new (addr: string, passed: boolean, spec: Long): any;
}
export interface QueryCursor {
    new (show: number, offset: number): any;
}
export interface QueryResult {
    new (total: number): any;
}
export interface WifiUnit {
    new (ssid: string, passwd: string): any;
}
export interface ReportReq {
    new (interval: number, contMask: Long): any;
}
export interface PluBody {
    new (room: Long, evt: PluEvt, typ: PluTyp, account: Long, amount: number, pstart: SyncDate, pend: SyncDate, tstart: number, tend: number): any;
}
export interface MateSpec {
    new (typ: MateType, name: string, prop: string): any;
}
export interface Exgood {
    new (room: Long, unit: number, pstart: SyncDate, pend: SyncDate, typ: PluTyp): any;
}
export interface IncomeUnit {
    new (typ: IncomeTyp, cash: number, checked: number, relId: Long, crt: Long): any;
}
export interface CheckUnit {
    new (cash: number, checked: number, unlock: Long, ext: string): any;
}
export interface CardUnit {
    new (name: string, no: string, swift: string, contact: string, prefer: boolean, prop: CardProp): any;
}
export interface ProceedUnit {
    new (cash: number, accum: number): any;
}
export interface WithdrawUnit {
    new (card: Long, cash: number, proc: WithdrawProc, crt: Long, upd: Long): any;
}
export interface PayMethod {
    new (amount: number, by: PayBy, note: string): any;
}
export interface PayInfo {
    new (method: PayMethod, stat: PayStat, deal: Long, crt: Long): any;
}
export interface DealInfo {
    new (price: number, type: DealType, stat: DealStat, crt: Long): any;
}
export interface arrClause {
    [index: number]: Clause;
}
export interface arrDeputy {
    [index: number]: Agency;
}
export interface settleCheckSet {
    [index: number]: SettleCheck;
}
export interface PrePutSet {
    [index: number]: PrePut;
}
export interface StockResSet {
    [index: number]: StockRes;
}
export interface BStream {
    [index: number]: string[];
}
export interface idSet {
    [index: number]: Long;
}
export interface intSet {
    [index: number]: number;
}
export interface strSet {
    [index: number]: string;
}
export interface PlaySet {
    [index: number]: PlayUnit;
}
export interface BookSet {
    [index: number]: BookUnit;
}
export interface WifiSet {
    [index: number]: WifiUnit;
}
export interface CheckUnitSeq {
    [index: number]: CheckUnit;
}
export interface PayMethodSet {
    [index: number]: PayMethod;
}
export declare type mapClause = any;
export declare type mapDeputy = any;
export declare type WineMap = any;
export declare type liMap = any;
export declare type aliveMap = any;
export declare type PermUnitMap = any;
export declare type RoomGrpInfoMap = any;
export declare type CheckRes = any;
export declare type MateSpecMap = any;
export declare type MateBodyMap = any;
export declare type PlaySetMap = any;
export declare type quotaMap = any;
export declare type PlanInfoMap = any;
export declare type PlanCondMap = any;
export declare type PlanContMap = any;
export declare type PlanRoomMap = any;
export declare type OrderSet = any;
export declare type DanmuMap = any;
export declare type SettleSet = any;
export declare type SpaceSet = any;
export declare type RoomSet = any;
export declare type SkuSet = any;
export declare type strSetMap = any;
export declare type idInfo = any;
export declare type idNum = any;
export declare type idCheck = any;
export declare type idMap = any;
export declare type idSetMap = any;
export declare type infoMap = any;
export declare type infoMapExt = any;
export declare type AdMap = any;
export declare type PluBodyMap = any;
export declare type IncomeUnitMap = any;
export declare type CardUnitMap = any;
export declare type ProceedUnitMap = any;
export declare type WithdrawUnitMap = any;
export declare type DealMap = any;
export declare type PayInfoMap = any;
export declare type PayStatMap = any;
export declare type PayByMap = any;
