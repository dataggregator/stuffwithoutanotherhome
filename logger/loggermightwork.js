// total=144317 new=34.89% cached=60.19% other=4.92%
(function (ectx) {
'use strict';
const runtime = ectx.runtime;
const oops = ectx.oops;
const doNothing = ectx.doNothing;
const pxsim = ectx.pxsim;
const globals = ectx.globals;
const maybeYield = ectx.maybeYield;
const setupDebugger = ectx.setupDebugger;
const isBreakFrame = ectx.isBreakFrame;
const breakpoint = ectx.breakpoint;
const trace = ectx.trace;
const checkStack = ectx.checkStack;
const leave = ectx.leave;
const checkResumeConsumed = ectx.checkResumeConsumed;
const setupResume = ectx.setupResume;
const setupLambda = ectx.setupLambda;
const checkSubtype = ectx.checkSubtype;
const failedCast = ectx.failedCast;
const buildResume = ectx.buildResume;
const mkVTable = ectx.mkVTable;
const bind = ectx.bind;
const leaveAccessor = ectx.leaveAccessor;
const __this = runtime;
const pxtrt = pxsim.pxtrt;
let yieldSteps = 1;
ectx.setupYield(function() { yieldSteps = 100; })
pxsim.setTitle("Untitled");
pxsim.setConfigData({}, {});
pxtrt.mapKeyNames = [
 "",
 "ConnectKidsIot",
 "ConnectMqtt",
 "ConnectThingSpeak",
 "ConnectWifi",
 "DisconnectKidsIot",
 "InitKidsIot",
 "PostIFTTT",
 "UploadKidsIot",
 "column",
 "switchOff",
 "switchOn",
 "value"
];
__this.setupPerfCounters([]);
const pxsim_Array__getAt = pxsim.Array_.getAt;
const pxsim_Array__length = pxsim.Array_.length;
const pxsim_Array__mk = pxsim.Array_.mk;
const pxsim_Array__push = pxsim.Array_.push;
const pxsim_Boolean__bang = pxsim.Boolean_.bang;
const pxsim_String__concat = pxsim.String_.concat;
const pxsim_String__stringConv = pxsim.String_.stringConv;
const pxsim_numops_toBool = pxsim.numops.toBool;
const pxsim_numops_toBoolDecr = pxsim.numops.toBoolDecr;
const pxsim_pxtcore_mkAction = pxsim.pxtcore.mkAction;
const pxsim_pxtcore_mkClassInstance = pxsim.pxtcore.mkClassInstance;
const pxsim_pxtrt_ldlocRef = pxsim.pxtrt.ldlocRef;
const pxsim_pxtrt_mapGetByString = pxsim.pxtrt.mapGetByString;
const pxsim_pxtrt_stclo = pxsim.pxtrt.stclo;
const pxsim_pxtrt_stlocRef = pxsim.pxtrt.stlocRef;
const pxsim_Boolean_ = pxsim.Boolean_;
const pxsim_pxtcore = pxsim.pxtcore;
const pxsim_String_ = pxsim.String_;
const pxsim_ImageMethods = pxsim.ImageMethods;
const pxsim_Array_ = pxsim.Array_;
const pxsim_pxtrt = pxsim.pxtrt;
const pxsim_numops = pxsim.numops;


function _main___P48689(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.i___18713 = undefined;
    globals._intervals___17093 = (undefined);
    globals._pollEventQueue___17319 = (undefined);
    globals.wifi_connected___17445 = (false);
    globals.thingspeak_connected___17447 = (false);
    globals.kidsiot_connected___17449 = (false);
    globals.mqttBrokerConnected___17451 = (false);
    r0 = pxsim_pxtrt.mkMap();
    globals.mqttSubscribeHandlers___17455 = (r0);
    r0 = pxsim_pxtrt.mkMap();
    globals.mqttSubscribeQos___17457 = (r0);
    globals.mqtthost_def___17458 = ("ELECFREAKS");
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    globals.currentCmd___17464 = (0);
    globals.THINGSPEAK_HOST___17465 = ("api.thingspeak.com");
    globals.KIDSIOT_HOST___17467 = ("139.159.161.57");
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "None", 0);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "ConnectWifi", 1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "ConnectThingSpeak", 2);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "ConnectKidsIot", 3);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "InitKidsIot", 4);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "UploadKidsIot", 5);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "DisconnectKidsIot", 6);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "ConnectMqtt", 7);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "PostIFTTT", 255);
    globals.EspEventValue___17472 = (s.tmp_0);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "switchOn", 1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "switchOff", 2);
    globals.KidsIotEventValue___17491 = (s.tmp_0);
    r0 = pxsim_String_.fromCharCode(10);
    s.tmp_0 = r0;
    r0 = pxsim.serial.onDataReceived(s.tmp_0, ESP8266_IoT_inline__P17523);
    globals.BME280_I2C_ADDR___18071 = (118);
    s.tmp_0 = Environment_getUInt16LE__P18076_mk(s);
    s.tmp_0.arg0 = 136;
    s.callLocIdx = 37; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    globals.dig_T1___18074 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 138;
    s.callLocIdx = 38; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    globals.dig_T2___18079 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 140;
    s.callLocIdx = 39; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    globals.dig_T3___18084 = (r0);
    s.tmp_0 = Environment_getUInt16LE__P18076_mk(s);
    s.tmp_0.arg0 = 142;
    s.callLocIdx = 40; s.pc = 6; return s.tmp_0;
  case 6:
    r0 = s.retval;
    globals.dig_P1___18088 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 144;
    s.callLocIdx = 41; s.pc = 7; return s.tmp_0;
  case 7:
    r0 = s.retval;
    globals.dig_P2___18092 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 146;
    s.callLocIdx = 42; s.pc = 8; return s.tmp_0;
  case 8:
    r0 = s.retval;
    globals.dig_P3___18096 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 148;
    s.callLocIdx = 43; s.pc = 9; return s.tmp_0;
  case 9:
    r0 = s.retval;
    globals.dig_P4___18100 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 150;
    s.callLocIdx = 44; s.pc = 10; return s.tmp_0;
  case 10:
    r0 = s.retval;
    globals.dig_P5___18104 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 152;
    s.callLocIdx = 45; s.pc = 11; return s.tmp_0;
  case 11:
    r0 = s.retval;
    globals.dig_P6___18108 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 154;
    s.callLocIdx = 46; s.pc = 12; return s.tmp_0;
  case 12:
    r0 = s.retval;
    globals.dig_P7___18112 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 156;
    s.callLocIdx = 47; s.pc = 13; return s.tmp_0;
  case 13:
    r0 = s.retval;
    globals.dig_P8___18116 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 158;
    s.callLocIdx = 48; s.pc = 14; return s.tmp_0;
  case 14:
    r0 = s.retval;
    globals.dig_P9___18120 = (r0);
    s.tmp_0 = Environment_getreg__P18126_mk(s);
    s.tmp_0.arg0 = 161;
    s.callLocIdx = 49; s.pc = 15; return s.tmp_0;
  case 15:
    r0 = s.retval;
    globals.dig_H1___18124 = (r0);
    s.tmp_0 = Environment_getInt16LE__P18081_mk(s);
    s.tmp_0.arg0 = 225;
    s.callLocIdx = 50; s.pc = 16; return s.tmp_0;
  case 16:
    r0 = s.retval;
    globals.dig_H2___18129 = (r0);
    s.tmp_0 = Environment_getreg__P18126_mk(s);
    s.tmp_0.arg0 = 227;
    s.callLocIdx = 51; s.pc = 17; return s.tmp_0;
  case 17:
    r0 = s.retval;
    globals.dig_H3___18133 = (r0);
    s.tmp_0 = Environment_getreg__P18126_mk(s);
    s.tmp_0.arg0 = 229;
    s.callLocIdx = 52; s.pc = 18; return s.tmp_0;
  case 18:
    r0 = s.retval;
    globals.a___18137 = (r0);
    s.tmp_2 = Environment_getreg__P18126_mk(s);
    s.tmp_2.arg0 = 228;
    s.callLocIdx = 53; s.pc = 19; return s.tmp_2;
  case 19:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 << 4);
    s.tmp_0 = r0;
    r0 = (globals.a___18137 % 16);
    s.tmp_3 = r0;
    r0 = (s.tmp_0 + s.tmp_3);
    globals.dig_H4___18141 = (r0);
    s.tmp_2 = Environment_getreg__P18126_mk(s);
    s.tmp_2.arg0 = 230;
    s.callLocIdx = 54; s.pc = 20; return s.tmp_2;
  case 20:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = (s.tmp_1 << 4);
    s.tmp_0 = r0;
    r0 = (globals.a___18137 >> 4);
    s.tmp_3 = r0;
    r0 = (s.tmp_0 + s.tmp_3);
    globals.dig_H5___18151 = (r0);
    s.tmp_0 = Environment_getInt8LE__P18163_mk(s);
    s.tmp_0.arg0 = 231;
    s.callLocIdx = 55; s.pc = 21; return s.tmp_0;
  case 21:
    r0 = s.retval;
    globals.dig_H6___18161 = (r0);
    s.tmp_0 = Environment_setreg__P18171_mk(s);
    s.tmp_0.arg0 = 242;
    s.tmp_0.arg1 = 4;
    s.callLocIdx = 56; s.pc = 22; return s.tmp_0;
  case 22:
    r0 = s.retval;
    s.tmp_0 = Environment_setreg__P18171_mk(s);
    s.tmp_0.arg0 = 244;
    s.tmp_0.arg1 = 47;
    s.callLocIdx = 57; s.pc = 23; return s.tmp_0;
  case 23:
    r0 = s.retval;
    s.tmp_0 = Environment_setreg__P18171_mk(s);
    s.tmp_0.arg0 = 245;
    s.tmp_0.arg1 = 12;
    s.callLocIdx = 58; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.tmp_0 = Environment_setreg__P18171_mk(s);
    s.tmp_0.arg0 = 244;
    s.tmp_0.arg1 = 47;
    s.callLocIdx = 59; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    globals.NFC_I2C_ADDR___18236 = (36);
    r0 = pxsim.pins.createBuffer(32);
    globals.recvBuf___18242 = (r0);
    r0 = pxsim.pins.createBuffer(8);
    globals.recvAck___18246 = (r0);
    r0 = pxsim.pins.createBuffer(6);
    globals.ackBuf___18250 = (r0);
    r0 = pxsim.pins.createBuffer(4);
    globals.uId___18254 = (r0);
    r0 = pxsim.pins.createBuffer(6);
    globals.passwdBuf___18258 = (r0);
    r0 = pxsim.pins.createBuffer(16);
    globals.blockData___18262 = (r0);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 0, 0);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 1, 0);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 2, 255);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 3, 0);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 4, 255);
    r0 = pxsim.BufferMethods.setByte(globals.ackBuf___18250, 5, 0);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 0, 255);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 1, 255);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 2, 255);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 3, 255);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 4, 255);
    r0 = pxsim.BufferMethods.setByte(globals.passwdBuf___18258, 5, 255);
    r0 = pxsim_pxtrt.mkMap();
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "first", -1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "xCenter", -1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "xOrigin", -1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "protocolSize", -1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "algorithmType", -1);
    r0 = pxsim_pxtrt.mapSetByString(s.tmp_0, "requestID", -1);
    globals.FIRST___18339 = (s.tmp_0);
    r0 = pxsim.serial.redirect(114, 115, 115200);
    globals.IIC_ADDRESS___18515 = (22);
    globals.Topic0CallBack___18521 = (null);
    globals.Topic1CallBack___18523 = (null);
    globals.Topic2CallBack___18525 = (null);
    globals.Topic3CallBack___18527 = (null);
    globals.Topic4CallBack___18529 = (null);
    globals.READmode___18537 = (0);
    globals.RUN_COMMAND___18543 = (2);
    globals.CONNECT_MQTT___18571 = (5);
    globals.SUB_TOPIC0___18573 = (6);
    globals.SUB_TOPIC1___18575 = (7);
    globals.SUB_TOPIC2___18577 = (8);
    globals.SUB_TOPIC3___18579 = (9);
    globals.SUB_TOPIC4___18581 = (10);
    globals.READ_PING___18601 = (1);
    globals.READ_WIFISTATUS___18603 = (2);
    globals.READ_IP___18605 = (3);
    globals.READ_MQTTSTATUS___18607 = (4);
    globals.READ_SUBSTATUS___18609 = (5);
    globals.HTTP_REQUEST___18613 = (16);
    globals.READ_VERSION___18615 = (18);
    globals.PING_OK___18617 = (1);
    globals.WIFI_DISCONNECT___18619 = (0);
    globals.WIFI_CONNECTING___18621 = (2);
    globals.WIFI_CONNECTED___18623 = (3);
    globals.MQTT_CONNECTED___18625 = (1);
    globals.MQTT_CONNECTERR___18627 = (2);
    globals.DISCONNECT_MQTT___18629 = (21);
    globals.SUB_TOPIC_OK___18631 = (1);
    globals.SUB_TOPIC_Ceiling___18633 = (2);
    r0 = pxsim_String_.mkEmpty();
    globals.microIoTStatus___18634 = (r0);
    r0 = pxsim_String_.mkEmpty();
    globals.RECDATA___18646 = (r0);
    globals.microIoT_IP___18649 = ("0.0.0.0");
    globals.wifiConnected___18653 = (0);
    globals.mqttState___18655 = (0);
    r0 = pxsim.basic.forever(microIoT_inline__P18690);
    r0 = pxsim.pins.createBuffer(48);
    globals.neopixel_buf___18711 = (r0);
    s.i___18713 = (0);
  case 1:
    r0 = (s.i___18713 < 48);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim.BufferMethods.setByte(globals.neopixel_buf___18711, s.i___18713, 0);
    r0 = (s.i___18713 + 1);
    s.i___18713 = (r0);
    { step = 1; continue; }
  case 2:
    globals._disabled___18884 = (false);
    globals.initialized___18886 = (false);
    globals._delay___18909 = (250);
    s.tmp_0 = turtle_init__P18910_mk(s);
    s.callLocIdx = 61; s.pc = 26; return s.tmp_0;
  case 26:
    r0 = s.retval;
    s.tmp_0 = turtle_paint__P18911_mk(s);
    s.callLocIdx = 62; s.pc = 27; return s.tmp_0;
  case 27:
    r0 = s.retval;
    s.tmp_0 = datalogger_onLogFull__P18897_mk(s);
    s.tmp_0.arg0 = on_log_full__P46855;
    s.callLocIdx = 63; s.pc = 28; return s.tmp_0;
  case 28:
    r0 = s.retval;
    r0 = pxsim.input.onButtonPressed(1, on_button_pressed_a__P46865);
    r0 = pxsim.input.onButtonPressed(3, on_button_pressed_ab__P46876);
    r0 = pxsim.input.onButtonPressed(2, on_button_pressed_b__P46895);
    globals.Logging___46857 = (false);
    globals.Logging___46857 = (false);
    s.tmp_0 = datalogger_setColumnTitles__P18895_mk(s);
    s.tmp_0.arg0 = "temperature";
    s.tmp_0.arg1 = undefined;
    s.tmp_0.arg2 = undefined;
    s.tmp_0.arg3 = undefined;
    s.tmp_0.arg4 = undefined;
    s.tmp_0.arg5 = undefined;
    s.tmp_0.arg6 = undefined;
    s.tmp_0.arg7 = undefined;
    s.tmp_0.arg8 = undefined;
    s.tmp_0.arg9 = undefined;
    s.callLocIdx = 68; s.pc = 29; return s.tmp_0;
  case 29:
    r0 = s.retval;
    s.tmp_0 = loops_everyInterval__P17371_mk(s);
    s.tmp_0.arg0 = 500;
    s.tmp_0.arg1 = on_every_interval__P46911;
    s.callLocIdx = 71; s.pc = 30; return s.tmp_0;
  case 30:
    r0 = s.retval;
    r0 = pxsim.basic.forever(on_forever__P46929);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
_main___P48689.info = {"start":0,"length":0,"line":0,"column":0,"endLine":0,"endColumn":0,"fileName":"pxt_modules/SSD1306_OLED/main.ts","functionName":"<main>","argumentNames":[]}
_main___P48689.continuations = [  ]

function _main___P48689_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: _main___P48689, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  i___18713: undefined,
} }





function ESP8266_IoT_inline__P17523(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.recvStringSplit___17571 = undefined;
    s.topic___17576 = undefined;
    s.message___17582 = undefined;
    if ((globals.recvString___17461) && (globals.recvString___17461).vtable) {
    setupResume(s, 73);
    pxsim_String__stringConv(globals.recvString___17461);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.recvString___17461) + ""; }
  case 73:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.serial.readString();
    s.tmp_2 = r0;
    if ((s.tmp_2) && (s.tmp_2).vtable) {
    setupResume(s, 74);
    pxsim_String__stringConv(s.tmp_2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_2) + ""; }
  case 74:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim_String__concat(s.tmp_0, s.tmp_1);
    globals.recvString___17461 = (r0);
    s.tmp_0 = pause__P17057_mk(s);
    s.tmp_0.arg0 = 1;
    s.callLocIdx = 1; s.pc = 75; return s.tmp_0;
  case 75:
    r0 = s.retval;
    r0 = pxsim_String_.includes(globals.recvString___17461, "switchoff", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_switchOff_1_mk(s);
    s.tmp_1.arg0 = globals.KidsIotEventValue___17491;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "switchOff");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["switchOff"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["switchOff"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 2; s.pc = 76; return s.tmp_1; }
    }
  case 76:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3100, s.tmp_0, 1);
    { step = 4; continue; }
  case 1:
    r0 = pxsim_String_.includes(globals.recvString___17461, "switchon", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_switchOn_1_mk(s);
    s.tmp_1.arg0 = globals.KidsIotEventValue___17491;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "switchOn");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["switchOn"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["switchOn"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 3; s.pc = 77; return s.tmp_1; }
    }
  case 77:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3100, s.tmp_0, 1);
  case 2:
  case 3:
  case 4:
    r0 = pxsim_String_.includes(globals.recvString___17461, "MQTTSUBRECV", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, "MQTTSUBRECV", undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 4; s.pc = 78; return s.tmp_1;
  case 78:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    s.tmp_0 = helpers_stringSplit__P16911_mk(s);
    s.tmp_0.arg0 = globals.recvString___17461;
    s.tmp_0.arg1 = ",";
    s.tmp_0.arg2 = 4;
    s.callLocIdx = 5; s.pc = 79; return s.tmp_0;
  case 79:
    r0 = s.retval;
    s.recvStringSplit___17571 = (r0);
    s.tmp_0 = helpers_stringSlice__P16908_mk(s);
    r0 = pxsim_Array__getAt(s.recvStringSplit___17571, 1);
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = -1;
    s.callLocIdx = 6; s.pc = 80; return s.tmp_0;
  case 80:
    r0 = s.retval;
    s.topic___17576 = (r0);
    s.tmp_0 = helpers_stringSlice__P16908_mk(s);
    r0 = pxsim_Array__getAt(s.recvStringSplit___17571, 3);
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = 0;
    s.tmp_0.arg2 = -2;
    s.callLocIdx = 7; s.pc = 81; return s.tmp_0;
  case 81:
    r0 = s.retval;
    s.message___17582 = (r0);
    r0 = pxsim_pxtrt.mapGetGeneric(globals.mqttSubscribeHandlers___17455, s.topic___17576);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = s.tmp_0;
    { step = 6; continue; }
  case 5:
    s.tmp_1 = lambda_2_mk(s);
    r0 = pxsim_pxtrt.mapGetGeneric(globals.mqttSubscribeHandlers___17455, s.topic___17576);
    s.tmp_1.argL = r0;
    s.tmp_1.arg0 = s.message___17582;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 8; s.pc = 82; return s.tmp_1;
  case 82:
    r0 = s.retval;
  case 6:
    // jmp value (already in r0)
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
  case 7:
  case 8:
    r0 = pxsim_String_.includes(globals.recvString___17461, "Congratu", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_PostIFTTT_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "PostIFTTT");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["PostIFTTT"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["PostIFTTT"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 9; s.pc = 83; return s.tmp_1; }
    }
  case 83:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 9:
  case 10:
    s.tmp_0 = r0 = globals.currentCmd___17464;
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 25; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 32; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 43; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 54; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 65; continue; }
    r0 = s.tmp_0;
    { step = 72; continue; }
  case 11:
    r0 = pxsim_String_.includes(globals.recvString___17461, "AT+CWJAP", undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 16; continue; }
    s.tmp_2 = helpers_stringSlice__P16908_mk(s);
    s.tmp_2.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, "AT+CWJAP", undefined);
    s.tmp_2.arg1 = r0;
    s.tmp_2.arg2 = undefined;
    s.callLocIdx = 10; s.pc = 84; return s.tmp_2;
  case 84:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "WIFI GOT IP", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 12; continue; }
    globals.wifi_connected___17445 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectWifi_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectWifi");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectWifi"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectWifi"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 11; s.pc = 85; return s.tmp_1; }
    }
  case 85:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 15; continue; }
  case 12:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 13; continue; }
    globals.wifi_connected___17445 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectWifi_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectWifi");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectWifi"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectWifi"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 12; s.pc = 86; return s.tmp_1; }
    }
  case 86:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    { step = 72; continue; }
  case 18:
    r0 = pxsim_String_.includes(globals.recvString___17461, globals.THINGSPEAK_HOST___17465, undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 23; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, globals.THINGSPEAK_HOST___17465, undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 13; s.pc = 87; return s.tmp_1;
  case 87:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "CONNECT", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 19; continue; }
    globals.thingspeak_connected___17447 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectThingSpeak_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectThingSpeak");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectThingSpeak"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectThingSpeak"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 14; s.pc = 88; return s.tmp_1; }
    }
  case 88:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 22; continue; }
  case 19:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    globals.thingspeak_connected___17447 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectThingSpeak_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectThingSpeak");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectThingSpeak"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectThingSpeak"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 15; s.pc = 89; return s.tmp_1; }
    }
  case 89:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 20:
  case 21:
  case 22:
  case 23:
  case 24:
    { step = 72; continue; }
  case 25:
    r0 = pxsim_String_.includes(globals.recvString___17461, globals.KIDSIOT_HOST___17467, undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 30; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, globals.KIDSIOT_HOST___17467, undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 16; s.pc = 90; return s.tmp_1;
  case 90:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "CONNECT", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 26; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 17; s.pc = 91; return s.tmp_1; }
    }
  case 91:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 29; continue; }
  case 26:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 27; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 18; s.pc = 92; return s.tmp_1; }
    }
  case 92:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 27:
  case 28:
  case 29:
  case 30:
  case 31:
    { step = 72; continue; }
  case 32:
    r0 = pxsim_String_.includes(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 37; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 19; s.pc = 93; return s.tmp_1;
  case 93:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 33; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_InitKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "InitKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["InitKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["InitKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 20; s.pc = 94; return s.tmp_1; }
    }
  case 94:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 36; continue; }
  case 33:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 34; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_InitKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "InitKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["InitKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["InitKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 21; s.pc = 95; return s.tmp_1; }
    }
  case 95:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 34:
  case 35:
  case 36:
    { step = 42; continue; }
  case 37:
    r0 = pxsim_String_.includes(globals.recvString___17461, "SEND OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 38; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_InitKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "InitKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["InitKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["InitKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 22; s.pc = 96; return s.tmp_1; }
    }
  case 96:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 41; continue; }
  case 38:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 39; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_InitKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "InitKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["InitKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["InitKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 23; s.pc = 97; return s.tmp_1; }
    }
  case 97:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 39:
  case 40:
  case 41:
  case 42:
    { step = 72; continue; }
  case 43:
    r0 = pxsim_String_.includes(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 48; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 24; s.pc = 98; return s.tmp_1;
  case 98:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 44; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_UploadKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "UploadKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["UploadKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["UploadKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 25; s.pc = 99; return s.tmp_1; }
    }
  case 99:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 47; continue; }
  case 44:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 45; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_UploadKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "UploadKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["UploadKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["UploadKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 26; s.pc = 100; return s.tmp_1; }
    }
  case 100:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 45:
  case 46:
  case 47:
    { step = 53; continue; }
  case 48:
    r0 = pxsim_String_.includes(globals.recvString___17461, "SEND OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 49; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_UploadKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "UploadKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["UploadKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["UploadKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 27; s.pc = 101; return s.tmp_1; }
    }
  case 101:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 52; continue; }
  case 49:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 50; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_UploadKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "UploadKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["UploadKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["UploadKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 28; s.pc = 102; return s.tmp_1; }
    }
  case 102:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 50:
  case 51:
  case 52:
  case 53:
    { step = 72; continue; }
  case 54:
    r0 = pxsim_String_.includes(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 59; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, "AT+CIPSEND", undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 29; s.pc = 103; return s.tmp_1;
  case 103:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 55; continue; }
    globals.kidsiot_connected___17449 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_DisconnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "DisconnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["DisconnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["DisconnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 30; s.pc = 104; return s.tmp_1; }
    }
  case 104:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 58; continue; }
  case 55:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 56; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_DisconnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "DisconnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["DisconnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["DisconnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 31; s.pc = 105; return s.tmp_1; }
    }
  case 105:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 56:
  case 57:
  case 58:
    { step = 64; continue; }
  case 59:
    r0 = pxsim_String_.includes(globals.recvString___17461, "SEND OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 60; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_DisconnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "DisconnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["DisconnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["DisconnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 32; s.pc = 106; return s.tmp_1; }
    }
  case 106:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 63; continue; }
  case 60:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 61; continue; }
    globals.kidsiot_connected___17449 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_DisconnectKidsIot_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "DisconnectKidsIot");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["DisconnectKidsIot"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["DisconnectKidsIot"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 33; s.pc = 107; return s.tmp_1; }
    }
  case 107:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 61:
  case 62:
  case 63:
  case 64:
    { step = 72; continue; }
  case 65:
    r0 = pxsim_String_.includes(globals.recvString___17461, globals.mqtthost_def___17458, undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 70; continue; }
    s.tmp_1 = helpers_stringSlice__P16908_mk(s);
    s.tmp_1.arg0 = globals.recvString___17461;
    r0 = pxsim_String_.indexOf(globals.recvString___17461, globals.mqtthost_def___17458, undefined);
    s.tmp_1.arg1 = r0;
    s.tmp_1.arg2 = undefined;
    s.callLocIdx = 34; s.pc = 108; return s.tmp_1;
  case 108:
    r0 = s.retval;
    globals.recvString___17461 = (r0);
    r0 = pxsim_String_.includes(globals.recvString___17461, "OK", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 66; continue; }
    globals.mqttBrokerConnected___17451 = (true);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectMqtt_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectMqtt");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectMqtt"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectMqtt"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 35; s.pc = 109; return s.tmp_1; }
    }
  case 109:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
    { step = 69; continue; }
  case 66:
    r0 = pxsim_String_.includes(globals.recvString___17461, "ERROR", undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 67; continue; }
    globals.mqttBrokerConnected___17451 = (false);
    r0 = pxsim_String_.mkEmpty();
    globals.recvString___17461 = (r0);
    s.tmp_1 = if_ConnectMqtt_1_mk(s);
    s.tmp_1.arg0 = globals.EspEventValue___17472;
    if (!s.tmp_1.arg0.vtable.iface) {
      s.retval = pxsim_pxtrt.mapGetByString(s.tmp_1.arg0, "ConnectMqtt");
    } else {
      s.tmp_1.fn = s.tmp_1.arg0.vtable.iface["ConnectMqtt"];
      if (s.tmp_1.fn == null) { s.retval = s.tmp_1.arg0.fields["ConnectMqtt"]; }
      else if (!s.tmp_1.fn.isGetter) { s.retval = bind(s.tmp_1); }
     else { s.callLocIdx = 36; s.pc = 110; return s.tmp_1; }
    }
  case 110:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.control.raiseEvent(3000, s.tmp_0, 1);
  case 67:
  case 68:
  case 69:
  case 70:
  case 71:
  case 72:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
ESP8266_IoT_inline__P17523.info = {"start":12808,"length":7800,"line":363,"column":65,"endLine":520,"endColumn":5,"fileName":"pxt_modules/ESP8266_IoT/ESP8266.ts","functionName":"inline","argumentNames":[]}

function ESP8266_IoT_inline__P17523_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: ESP8266_IoT_inline__P17523, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  recvStringSplit___17571: undefined,
  topic___17576: undefined,
  message___17582: undefined,
} }





function microIoT_inline__P18690(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = microIoT_microIoT_InquireStatus__P18687_mk(s);
    s.callLocIdx = 60; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
microIoT_inline__P18690.info = {"start":27971,"length":53,"line":908,"column":18,"endLine":910,"endColumn":5,"fileName":"pxt_modules/IoT_Cloud_Kit/microiotkit.ts","functionName":"inline","argumentNames":[]}

function microIoT_inline__P18690_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: microIoT_inline__P18690, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function on_log_full__P46855(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals.Logging___46857 = (false);
    setupResume(s, 1);
    pxsim.basic.showString("STORAGE FULL", 150);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_log_full__P46855.info = {"start":21,"length":88,"line":0,"column":21,"endLine":4,"endColumn":1,"fileName":"main.ts","functionName":"on_log_full","argumentNames":[]}

function on_log_full__P46855_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_log_full__P46855, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function on_button_pressed_a__P46865(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.Logging___46857);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    globals.Logging___46857 = (r0);
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = basic_showIcon__P17059_mk(s);
    s.tmp_0.arg0 = 2;
    s.tmp_0.arg1 = 600;
    s.callLocIdx = 64; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    r0 = pxsim.basic.clearScreen();
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_button_pressed_a__P46865.info = {"start":143,"length":168,"line":5,"column":32,"endLine":14,"endColumn":1,"fileName":"main.ts","functionName":"on_button_pressed_a","argumentNames":[]}

function on_button_pressed_a__P46865_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_button_pressed_a__P46865, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function on_button_pressed_ab__P46876(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tmp_0 = basic_showIcon__P17059_mk(s);
    s.tmp_0.arg0 = 3;
    s.tmp_0.arg1 = 600;
    s.callLocIdx = 65; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = datalogger_deleteLog__P18896_mk(s);
    s.tmp_0.arg0 = undefined;
    s.callLocIdx = 66; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    globals.Logging___46857 = (false);
    s.tmp_0 = datalogger_setColumnTitles__P18895_mk(s);
    s.tmp_0.arg0 = "temperature";
    s.tmp_0.arg1 = undefined;
    s.tmp_0.arg2 = undefined;
    s.tmp_0.arg3 = undefined;
    s.tmp_0.arg4 = undefined;
    s.tmp_0.arg5 = undefined;
    s.tmp_0.arg6 = undefined;
    s.tmp_0.arg7 = undefined;
    s.tmp_0.arg8 = undefined;
    s.tmp_0.arg9 = undefined;
    s.callLocIdx = 67; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_button_pressed_ab__P46876.info = {"start":346,"length":166,"line":15,"column":33,"endLine":21,"endColumn":1,"fileName":"main.ts","functionName":"on_button_pressed_ab","argumentNames":[]}

function on_button_pressed_ab__P46876_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_button_pressed_ab__P46876, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function on_button_pressed_b__P46895(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals.Logging___46857 = (false);
    r0 = pxsim.basic.clearScreen();
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_button_pressed_b__P46895.info = {"start":546,"length":83,"line":22,"column":32,"endLine":26,"endColumn":1,"fileName":"main.ts","functionName":"on_button_pressed_b","argumentNames":[]}

function on_button_pressed_b__P46895_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_button_pressed_b__P46895, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function on_every_interval__P46911(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.Logging___46857);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = datalogger_log__P18893_mk(s);
    s.tmp_1 = datalogger_createCV__P18890_mk(s);
    s.tmp_1.arg0 = "temperature";
    r0 = pxsim.pins.analogReadPin(100);
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 69; s.pc = 4; return s.tmp_1;
  case 4:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.tmp_0.arg1 = undefined;
    s.tmp_0.arg2 = undefined;
    s.tmp_0.arg3 = undefined;
    s.tmp_0.arg4 = undefined;
    s.tmp_0.arg5 = undefined;
    s.tmp_0.arg6 = undefined;
    s.tmp_0.arg7 = undefined;
    s.tmp_0.arg8 = undefined;
    s.tmp_0.arg9 = undefined;
    s.callLocIdx = 70; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_every_interval__P46911.info = {"start":734,"length":155,"line":30,"column":25,"endLine":35,"endColumn":1,"fileName":"main.ts","functionName":"on_every_interval","argumentNames":[]}

function on_every_interval__P46911_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_every_interval__P46911, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function on_forever__P46929(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
on_forever__P46929.info = {"start":905,"length":30,"line":36,"column":14,"endLine":38,"endColumn":1,"fileName":"main.ts","functionName":"on_forever","argumentNames":[]}

function on_forever__P46929_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: on_forever__P46929, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function datalogger_createCV__P18890(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkClassInstance(datalogger_ColumnValue__C18888_VT);
    s.tmp_0 = r0;
    s.tmp_1 = datalogger_ColumnValue_constructor__P18889_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.tmp_1.arg1 = s.arg0;
    s.tmp_1.arg2 = s.arg1;
    s.callLocIdx = 63; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = s.tmp_0;
    return leave(s, r0)
  default: oops()
} } }
datalogger_createCV__P18890.info = {"start":1747,"length":120,"line":68,"column":4,"endLine":70,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"createCV","argumentNames":["column","value"]}

function datalogger_createCV__P18890_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_createCV__P18890, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function datalogger_ColumnValue_constructor__P18889(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = s.arg0;
    if (!checkSubtype(r0, datalogger_ColumnValue__C18888_VT)) failedCast(r0);
    r0 = (s.arg0).fields["column"] = (s.arg1);
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_2 = r0;
    if ((s.arg2) && (s.arg2).vtable) {
    setupResume(s, 1);
    pxsim_String__stringConv(s.arg2);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.arg2) + ""; }
  case 1:
    r0 = s.retval;
    s.tmp_3 = r0;
    r0 = pxsim_String__concat(s.tmp_2, s.tmp_3);
    s.tmp_1 = r0;
    r0 = (s.tmp_0).fields["value"] = (s.tmp_1);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_ColumnValue_constructor__P18889.info = {"start":1143,"length":129,"line":48,"column":8,"endLine":53,"endColumn":9,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"inline","argumentNames":["this","column","value"]}

function datalogger_ColumnValue_constructor__P18889_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_ColumnValue_constructor__P18889, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function datalogger_log__P18893(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.arg5 = (s.lambdaArgs[5]);
      s.arg6 = (s.lambdaArgs[6]);
      s.arg7 = (s.lambdaArgs[7]);
      s.arg8 = (s.lambdaArgs[8]);
      s.arg9 = (s.lambdaArgs[9]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    r0 = pxsim_Array__push(s.tmp_0, s.arg2);
    r0 = pxsim_Array__push(s.tmp_0, s.arg3);
    r0 = pxsim_Array__push(s.tmp_0, s.arg4);
    r0 = pxsim_Array__push(s.tmp_0, s.arg5);
    r0 = pxsim_Array__push(s.tmp_0, s.arg6);
    r0 = pxsim_Array__push(s.tmp_0, s.arg7);
    r0 = pxsim_Array__push(s.tmp_0, s.arg8);
    r0 = pxsim_Array__push(s.tmp_0, s.arg9);
    s.tmp_1 = datalogger_logData__P18892_mk(s);
    s.tmp_2 = helpers_arrayFilter__P16898_mk(s);
    s.tmp_2.arg0 = s.tmp_0;
    s.tmp_2.arg1 = datalogger_log_inline__P26133;
    s.callLocIdx = 61; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 62; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_log__P18893.info = {"start":4359,"length":745,"line":137,"column":4,"endLine":163,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"log","argumentNames":["data1","data2","data3","data4","data5","data6","data7","data8","data9","data10"]}

function datalogger_log__P18893_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_log__P18893, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
  arg5: undefined,
  arg6: undefined,
  arg7: undefined,
  arg8: undefined,
  arg9: undefined,
} }





function datalogger_log_inline__P26133(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
datalogger_log_inline__P26133.info = {"start":5076,"length":10,"line":161,"column":21,"endLine":161,"endColumn":31,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"inline","argumentNames":["el"]}

function datalogger_log_inline__P26133_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_log_inline__P26133, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function datalogger_logData__P18892(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.cv___20222 = undefined;
    s.unnamed10___U1 = undefined;
    s.unnamed11___U2 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBool(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.tmp_0;
    { step = 2; continue; }
  case 1:
    r0 = pxsim_Array__length(s.arg0);
    s.tmp_3 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_3);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
  case 2:
    // jmp value (already in r0)
    s.tmp_4 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_4);
    if (!r0) { step = 3; continue; }
    { step = 9; continue; }
  case 3:
  case 4:
    s.tmp_5 = datalogger_init__P18887_mk(s);
    s.callLocIdx = 64; s.pc = 10; return s.tmp_5;
  case 10:
    r0 = s.retval;
    r0 = pxsim_numops_toBoolDecr(globals._disabled___18884);
    if (!r0) { step = 5; continue; }
    { step = 9; continue; }
  case 5:
  case 6:
    r0 = pxsim.flashlog.beginRow();
    s.cv___20222 = (undefined);
    s.unnamed10___U1 = (s.arg0);
    s.unnamed11___U2 = (0);
  case 7:
    s.tmp_0 = r0 = s.unnamed11___U2;
    r0 = pxsim_Array__length(s.unnamed10___U1);
    s.tmp_1 = r0;
    r0 = (s.tmp_0 < s.tmp_1);
    if (!r0) { step = 8; continue; }
    r0 = pxsim_Array__getAt(s.unnamed10___U1, s.unnamed11___U2);
    s.cv___20222 = (r0);
    r0 = s.cv___20222.fields["column"];
    s.tmp_2 = r0;
    r0 = s.cv___20222.fields["value"];
    s.tmp_3 = r0;
    r0 = pxsim.flashlog.logData(s.tmp_2, s.tmp_3);
    r0 = (s.unnamed11___U2 + 1);
    s.unnamed11___U2 = (r0);
    { step = 7; continue; }
  case 8:
    s.unnamed10___U1 = (undefined);
    r0 = pxsim.flashlog.endRow();
  case 9:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_logData__P18892.info = {"start":2561,"length":324,"line":93,"column":4,"endLine":106,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"logData","argumentNames":["data"]}

function datalogger_logData__P18892_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_logData__P18892, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  cv___20222: undefined,
  unnamed10___U1: undefined,
  unnamed11___U2: undefined,
  arg0: undefined,
} }





function datalogger_init__P18887(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals.initialized___18886);
    if (!r0) { step = 1; continue; }
    { step = 3; continue; }
  case 1:
  case 2:
    globals.initialized___18886 = (true);
    s.tmp_0 = datalogger_includeTimestamp__P18898_mk(s);
    s.tmp_0.arg0 = 10;
    s.callLocIdx = 97; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    s.tmp_0 = datalogger_mirrorToSerial__P18899_mk(s);
    s.tmp_0.arg0 = false;
    s.callLocIdx = 98; s.pc = 5; return s.tmp_0;
  case 5:
    r0 = s.retval;
    r0 = pxsim.control.onEvent(44, 1, datalogger_init_inline__P19187, 0);
  case 3:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_init__P18887.info = {"start":334,"length":737,"line":18,"column":4,"endLine":43,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"init","argumentNames":[]}

function datalogger_init__P18887_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_init__P18887, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function datalogger_init_inline__P19187(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    globals._disabled___18884 = (true);
    r0 = pxsim_numops_toBoolDecr(globals.onLogFullHandler___18882);
    if (!r0) { step = 1; continue; }
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = globals.onLogFullHandler___18882;
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 99; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    { step = 2; continue; }
  case 1:
    setupResume(s, 4);
    pxsim.basic.showLeds(new pxsim.Image(5, [255,0,0,0,255,255,255,0,255,255,0,0,0,0,0,0,255,255,255,0,255,0,0,0,255,0]), 400);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
    setupResume(s, 5);
    pxsim.basic.pause(1000);
    checkResumeConsumed();
    return;
  case 5:
    r0 = s.retval;
    r0 = pxsim.basic.clearScreen();
    setupResume(s, 6);
    pxsim.basic.showString("928", 150);
    checkResumeConsumed();
    return;
  case 6:
    r0 = s.retval;
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_init_inline__P19187.info = {"start":593,"length":470,"line":26,"column":76,"endLine":42,"endColumn":9,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"inline","argumentNames":[]}

function datalogger_init_inline__P19187_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_init_inline__P19187, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
} }





function datalogger_mirrorToSerial__P18899(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = datalogger_init__P18887_mk(s);
    s.callLocIdx = 101; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = pxsim.flashlog.setSerialMirroring(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_mirrorToSerial__P18899.info = {"start":9258,"length":267,"line":282,"column":4,"endLine":287,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"mirrorToSerial","argumentNames":["on"]}

function datalogger_mirrorToSerial__P18899_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_mirrorToSerial__P18899, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function datalogger_includeTimestamp__P18898(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = datalogger_init__P18887_mk(s);
    s.callLocIdx = 100; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = pxsim.flashlog.setTimeStamp(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_includeTimestamp__P18898.info = {"start":8783,"length":134,"line":268,"column":4,"endLine":271,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"includeTimestamp","argumentNames":["format"]}

function datalogger_includeTimestamp__P18898_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_includeTimestamp__P18898, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayFilter__P16898(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___20163 = undefined;
    s.len___20165 = undefined;
    s.i___20168 = undefined;
    s.v___20173 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___20163 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___20165 = (r0);
    s.i___20168 = (0);
  case 1:
    r0 = (s.i___20168 < s.len___20165);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    r0 = pxsim_Array__getAt(s.arg0, s.i___20168);
    s.v___20173 = (r0);
    s.tmp_1 = lambda_3_mk(s);
    s.tmp_1.argL = s.arg1;
    s.tmp_1.arg0 = s.v___20173;
    s.tmp_1.arg1 = s.i___20168;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 1; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    r0 = pxsim_Array__push(s.res___20163, s.v___20173);
  case 2:
  case 3:
    r0 = (s.i___20168 + 1);
    s.i___20168 = (r0);
    { step = 1; continue; }
  case 4:
    r0 = s.res___20163;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayFilter__P16898.info = {"start":7695,"length":317,"line":261,"column":4,"endLine":269,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayFilter","argumentNames":["arr","callbackfn"]}

function helpers_arrayFilter__P16898_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayFilter__P16898, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  res___20163: undefined,
  len___20165: undefined,
  i___20168: undefined,
  v___20173: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function loops_everyInterval__P17371(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_pxtcore_mkAction(2, loops_everyInterval_inline__P37101);
    s.tmp_0 = r0;
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 0, s.arg1);
    r0 = pxsim_pxtrt_stclo(s.tmp_0, 1, s.arg0);
    s.tmp_1 = control_runInParallel__P17072_mk(s);
    s.tmp_1.arg0 = s.tmp_0;
    s.callLocIdx = 3; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
loops_everyInterval__P17371.info = {"start":502,"length":332,"line":12,"column":4,"endLine":21,"endColumn":5,"fileName":"pxt_modules/core/loops.ts","functionName":"everyInterval","argumentNames":["interval","a"]}

function loops_everyInterval__P17371_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: loops_everyInterval__P17371, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function loops_everyInterval_inline__P37101(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.start___37102 = undefined;
    s.start___37102 = (0);
  case 1:
    r0 = pxsim_numops_toBoolDecr(true);
    if (!r0) { step = 2; continue; }
    r0 = pxsim.control.millis();
    s.start___37102 = (r0);
    s.tmp_0 = lambda_1_mk(s);
    s.tmp_0.argL = s.caps[0];
    setupLambda(s.tmp_0, s.tmp_0.argL);
    s.callLocIdx = 0; s.pc = 3; return s.tmp_0;
  case 3:
    r0 = s.retval;
    s.tmp_0 = pause__P17057_mk(s);
    s.tmp_1 = Math_max__P16919_mk(s);
    s.tmp_1.arg0 = 0;
    s.tmp_2 = r0 = s.caps[1];
    r0 = pxsim.control.millis();
    s.tmp_4 = r0;
    r0 = (s.tmp_4 - s.start___37102);
    s.tmp_3 = r0;
    r0 = (s.tmp_2 - s.tmp_3);
    s.tmp_1.arg1 = r0;
    s.callLocIdx = 1; s.pc = 5; return s.tmp_1;
  case 5:
    r0 = s.retval;
    s.tmp_0.arg0 = r0;
    s.callLocIdx = 2; s.pc = 4; return s.tmp_0;
  case 4:
    r0 = s.retval;
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
loops_everyInterval_inline__P37101.info = {"start":603,"length":223,"line":13,"column":30,"endLine":20,"endColumn":9,"fileName":"pxt_modules/core/loops.ts","functionName":"inline","argumentNames":[]}

function loops_everyInterval_inline__P37101_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: loops_everyInterval_inline__P37101, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  start___37102: undefined,
} }





function control_runInParallel__P17072(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.control.inBackground(s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
control_runInParallel__P17072.info = {"start":195,"length":85,"line":10,"column":4,"endLine":12,"endColumn":5,"fileName":"pxt_modules/core/control.ts","functionName":"runInParallel","argumentNames":["a"]}

function control_runInParallel__P17072_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: control_runInParallel__P17072, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function Math_max__P16919(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 >= s.arg1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = s.arg0;
    { step = 3; continue; }
  case 1:
  case 2:
    r0 = s.arg1;
  case 3:
    return leave(s, r0)
  default: oops()
} } }
Math_max__P16919.info = {"start":16564,"length":105,"line":556,"column":4,"endLine":559,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"max","argumentNames":["a","b"]}

function Math_max__P16919_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Math_max__P16919, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function datalogger_setColumnTitles__P18895(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.arg4 = (s.lambdaArgs[4]);
      s.arg5 = (s.lambdaArgs[5]);
      s.arg6 = (s.lambdaArgs[6]);
      s.arg7 = (s.lambdaArgs[7]);
      s.arg8 = (s.lambdaArgs[8]);
      s.arg9 = (s.lambdaArgs[9]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.tmp_0 = r0;
    r0 = pxsim_Array__push(s.tmp_0, s.arg0);
    r0 = pxsim_Array__push(s.tmp_0, s.arg1);
    r0 = pxsim_Array__push(s.tmp_0, s.arg2);
    r0 = pxsim_Array__push(s.tmp_0, s.arg3);
    r0 = pxsim_Array__push(s.tmp_0, s.arg4);
    r0 = pxsim_Array__push(s.tmp_0, s.arg5);
    r0 = pxsim_Array__push(s.tmp_0, s.arg6);
    r0 = pxsim_Array__push(s.tmp_0, s.arg7);
    r0 = pxsim_Array__push(s.tmp_0, s.arg8);
    r0 = pxsim_Array__push(s.tmp_0, s.arg9);
    s.tmp_1 = datalogger_logData__P18892_mk(s);
    s.tmp_2 = helpers_arrayMap__P16894_mk(s);
    s.tmp_3 = helpers_arrayFilter__P16898_mk(s);
    s.tmp_3.arg0 = s.tmp_0;
    s.tmp_3.arg1 = map_inline__P20135;
    s.callLocIdx = 65; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2.arg0 = r0;
    s.tmp_2.arg1 = datalogger_setColumnTitles_inline__P20140;
    s.callLocIdx = 67; s.pc = 2; return s.tmp_2;
  case 2:
    r0 = s.retval;
    s.tmp_1.arg0 = r0;
    s.callLocIdx = 68; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_setColumnTitles__P18895.info = {"start":6933,"length":466,"line":212,"column":4,"endLine":229,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"setColumnTitles","argumentNames":["col1","col2","col3","col4","col5","col6","col7","col8","col9","col10"]}

function datalogger_setColumnTitles__P18895_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_setColumnTitles__P18895, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
  arg4: undefined,
  arg5: undefined,
  arg6: undefined,
  arg7: undefined,
  arg8: undefined,
  arg9: undefined,
} }





function map_inline__P20135(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_numops_toBoolDecr(s.arg0);
    s.tmp_2 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_2);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_0);
    return leave(s, r0)
  default: oops()
} } }
map_inline__P20135.info = {"start":7324,"length":10,"line":226,"column":24,"endLine":226,"endColumn":34,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"inline","argumentNames":["el"]}

function map_inline__P20135_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: map_inline__P20135, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  arg0: undefined,
} }





function datalogger_setColumnTitles_inline__P20140(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = datalogger_createCV__P18890_mk(s);
    s.tmp_0.arg0 = s.arg0;
    r0 = pxsim_String_.mkEmpty();
    s.tmp_0.arg1 = r0;
    s.callLocIdx = 66; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
datalogger_setColumnTitles_inline__P20140.info = {"start":7357,"length":24,"line":227,"column":21,"endLine":227,"endColumn":45,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"inline","argumentNames":["col"]}

function datalogger_setColumnTitles_inline__P20140_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_setColumnTitles_inline__P20140, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_arrayMap__P16894(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___20189 = undefined;
    s.len___20191 = undefined;
    s.i___20194 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.res___20189 = (r0);
    r0 = pxsim_Array__length(s.arg0);
    s.len___20191 = (r0);
    s.i___20194 = (0);
  case 1:
    r0 = (s.i___20194 < s.len___20191);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.tmp_1 = r0 = s.res___20189;
    s.tmp_3 = lambda_3_mk(s);
    s.tmp_3.argL = s.arg1;
    r0 = pxsim_Array__getAt(s.arg0, s.i___20194);
    s.tmp_3.arg0 = r0;
    s.tmp_3.arg1 = s.i___20194;
    setupLambda(s.tmp_3, s.tmp_3.argL);
    s.callLocIdx = 0; s.pc = 3; return s.tmp_3;
  case 3:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_Array__push(s.tmp_1, s.tmp_2);
    r0 = (s.i___20194 + 1);
    s.i___20194 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = s.res___20189;
    return leave(s, r0)
  default: oops()
} } }
helpers_arrayMap__P16894.info = {"start":6528,"length":299,"line":229,"column":4,"endLine":236,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"arrayMap","argumentNames":["arr","callbackfn"]}

function helpers_arrayMap__P16894_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_arrayMap__P16894, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  res___20189: undefined,
  len___20191: undefined,
  i___20194: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function datalogger_deleteLog__P18896(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = datalogger_init__P18887_mk(s);
    s.callLocIdx = 61; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    r0 = (s.arg0 === 1);
    s.tmp_0 = r0;
    r0 = pxsim.flashlog.clear(s.tmp_0);
    globals._disabled___18884 = (false);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_deleteLog__P18896.info = {"start":7796,"length":163,"line":240,"column":4,"endLine":244,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"deleteLog","argumentNames":["deleteType"]}

function datalogger_deleteLog__P18896_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_deleteLog__P18896, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function basic_showIcon__P17059(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.res___18997 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = images_iconImage__P17062_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 6; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.res___18997 = (r0);
    setupResume(s, 2);
    pxsim_ImageMethods.showImage(s.res___18997, 0, s.arg1);
    checkResumeConsumed();
    return;
  case 2:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
basic_showIcon__P17059.info = {"start":4957,"length":141,"line":185,"column":4,"endLine":188,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"showIcon","argumentNames":["icon","interval"]}

function basic_showIcon__P17059_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: basic_showIcon__P17059, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  res___18997: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function images_iconImage__P17062(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(0, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(32, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(33, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(34, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = pxsim_pxtcore.switch_eq(35, s.tmp_0);
    if (r0) { step = 17; continue; }
    r0 = pxsim_pxtcore.switch_eq(36, s.tmp_0);
    if (r0) { step = 18; continue; }
    r0 = pxsim_pxtcore.switch_eq(37, s.tmp_0);
    if (r0) { step = 19; continue; }
    r0 = pxsim_pxtcore.switch_eq(38, s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = pxsim_pxtcore.switch_eq(39, s.tmp_0);
    if (r0) { step = 21; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 22; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 23; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 24; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 25; continue; }
    r0 = pxsim_pxtcore.switch_eq(17, s.tmp_0);
    if (r0) { step = 26; continue; }
    r0 = pxsim_pxtcore.switch_eq(18, s.tmp_0);
    if (r0) { step = 27; continue; }
    r0 = pxsim_pxtcore.switch_eq(19, s.tmp_0);
    if (r0) { step = 28; continue; }
    r0 = pxsim_pxtcore.switch_eq(20, s.tmp_0);
    if (r0) { step = 29; continue; }
    r0 = pxsim_pxtcore.switch_eq(21, s.tmp_0);
    if (r0) { step = 30; continue; }
    r0 = pxsim_pxtcore.switch_eq(22, s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = pxsim_pxtcore.switch_eq(23, s.tmp_0);
    if (r0) { step = 32; continue; }
    r0 = pxsim_pxtcore.switch_eq(24, s.tmp_0);
    if (r0) { step = 33; continue; }
    r0 = pxsim_pxtcore.switch_eq(25, s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = pxsim_pxtcore.switch_eq(26, s.tmp_0);
    if (r0) { step = 35; continue; }
    r0 = pxsim_pxtcore.switch_eq(27, s.tmp_0);
    if (r0) { step = 36; continue; }
    r0 = pxsim_pxtcore.switch_eq(28, s.tmp_0);
    if (r0) { step = 37; continue; }
    r0 = pxsim_pxtcore.switch_eq(29, s.tmp_0);
    if (r0) { step = 38; continue; }
    r0 = pxsim_pxtcore.switch_eq(30, s.tmp_0);
    if (r0) { step = 39; continue; }
    r0 = pxsim_pxtcore.switch_eq(31, s.tmp_0);
    if (r0) { step = 40; continue; }
    r0 = s.tmp_0;
    { step = 41; continue; }
  case 1:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 2:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 3:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,255,0,0,0,255,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 4:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,255,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 5:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,0,255,0,0,0,0,0,0,0,255,0,255,0,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 6:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,0,0,0,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 7:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,255,255,0,255,255,0,0,0,0,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 8:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 9:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,0,0,0,0,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0]));
    { step = 42; continue; }
  case 10:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,255,0,255,255,0,0,0,0,0,0,255,0,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 11:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,0,0,0,0,0,0,0,0,255,0,0,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 12:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,0]));
    { step = 42; continue; }
  case 13:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 14:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,255,255,255,255,255,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 15:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,0,255,255,0,0,0,255,0,255,0,0,255,0,0,255,0,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 16:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 17:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 18:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,255,0,0,0,255,0,255,0,0,0,255,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 19:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,255,255,255,255,0,0,0,255,255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0]));
    { step = 42; continue; }
  case 20:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 21:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,255,255,255,0,255,0,0,0,255,0,0,255,255,0,255,0,255,255,0,0,255,0]));
    { step = 42; continue; }
  case 22:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 23:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,255,255,0,0,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 24:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,0,0,255,255,255,0,0,0,255,255,255,255,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 25:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,255,255,255,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 26:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,255,255,255,0,255,255,255,255,255,0,255,0,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 27:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,255,255,255,255,255,255,255,0,0,255,0,0,255,255,255,255,255,255,255,0,255,255,0]));
    { step = 42; continue; }
  case 28:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,255,255,255,255,255,0,0,255,0,0,0,255,0,255,0,255,0,0,0,255,0]));
    { step = 42; continue; }
  case 29:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,255,255,255,255,255,255,0,255,0,255,0]));
    { step = 42; continue; }
  case 30:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 31:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,0,255,0,0,0,0,255,0,0,0,0,255,255,255,0,0,255,0,255,0,0]));
    { step = 42; continue; }
  case 32:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,0,255,0,255,255,255,255,255,255,0,255,255,255,0,0,255,255,255,0,0]));
    { step = 42; continue; }
  case 33:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,255,255,255,0,255,255,255,255,255,0,0,255,0,0,255,0,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 34:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,255,0,0,0,255,255,0,255,255,0,255,0,255,0,0,255,255,255,0,0,0,0,0,0,0]));
    { step = 42; continue; }
  case 35:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,0,255,0,255,0,0,255,255,255,255,0,255,255,0,255,0,255,255,255,255,0,0]));
    { step = 42; continue; }
  case 36:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,0,0,255,255,0,0,0,255,255,255,255,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 37:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,0,0,0,0,255,0,0,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 38:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,0,255,255,0,0,0,255,0,255,255,255,255,0,0,255,255,255,0,0,0]));
    { step = 42; continue; }
  case 39:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [255,0,255,0,255,255,0,255,0,255,255,255,255,255,255,0,0,255,0,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 40:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,255,0,0,0,255,255,255,0,255,255,0,255,255,0,255,255,255,0,0,0,255,0,0,0]));
    { step = 42; continue; }
  case 41:
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
    { step = 42; continue; }
    r0 = undefined;
  case 42:
    return leave(s, r0)
  default: oops()
} } }
images_iconImage__P17062.info = {"start":9027,"length":13275,"line":280,"column":4,"endLine":537,"endColumn":5,"fileName":"pxt_modules/core/icons.ts","functionName":"iconImage","argumentNames":["i"]}

function images_iconImage__P17062_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: images_iconImage__P17062, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function datalogger_onLogFull__P18897(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = datalogger_init__P18887_mk(s);
    s.callLocIdx = 61; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    globals.onLogFullHandler___18882 = (s.arg0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
datalogger_onLogFull__P18897.info = {"start":8268,"length":112,"line":254,"column":4,"endLine":257,"endColumn":5,"fileName":"pxt_modules/datalogger/datalogger.ts","functionName":"onLogFull","argumentNames":["handler"]}

function datalogger_onLogFull__P18897_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: datalogger_onLogFull__P18897, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function turtle_paint__P18911(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_ImageMethods.plotImage(globals._img___18907, 0);
    r0 = pxsim.led.plotBrightness(globals._x___18900, globals._y___18901, 255);
    setupResume(s, 1);
    pxsim.basic.pause(globals._delay___18909);
    checkResumeConsumed();
    return;
  case 1:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
turtle_paint__P18911.info = {"start":879,"length":191,"line":38,"column":4,"endLine":45,"endColumn":5,"fileName":"pxt_modules/microturtle/turtle.ts","functionName":"paint","argumentNames":[]}

function turtle_paint__P18911_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: turtle_paint__P18911, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
} }





function turtle_init__P18910(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    r0 = pxsim_numops_toBoolDecr(globals._img___18907);
    s.tmp_1 = r0;
    r0 = pxsim_Boolean__bang(s.tmp_1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = pxsim.led.setBrightness(255);
    r0 = pxsim.led.setDisplayMode(1);
    globals._x___18900 = (2);
    globals._y___18901 = (2);
    globals._direction___18902 = (3);
    globals._brightness___18903 = (128);
    r0 = pxsim.images.createImage(new pxsim.Image(5, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));
    globals._img___18907 = (r0);
    r0 = pxsim.basic.clearScreen();
  case 1:
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
turtle_init__P18910.info = {"start":407,"length":466,"line":19,"column":4,"endLine":36,"endColumn":5,"fileName":"pxt_modules/microturtle/turtle.ts","functionName":"init","argumentNames":[]}

function turtle_init__P18910_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: turtle_init__P18910, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
} }





function microIoT_microIoT_InquireStatus__P18687(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___19235 = undefined;
    s.tempId___19238 = undefined;
    s.tempStatus___19239 = undefined;
    s.recbuf___19252 = undefined;
    r0 = pxsim.pins.createBuffer(3);
    s.buf___19235 = (r0);
    s.tempId___19238 = (0);
    s.tempStatus___19239 = (0);
    r0 = pxsim.BufferMethods.setByte(s.buf___19235, 0, 30);
    r0 = pxsim.BufferMethods.setByte(s.buf___19235, 1, globals.READmode___18537);
    r0 = pxsim.BufferMethods.setByte(s.buf___19235, 2, 6);
    r0 = pxsim.pins.i2cWriteBuffer(globals.IIC_ADDRESS___18515, s.buf___19235, 0);
    r0 = pxsim.pins.createBuffer(2);
    s.recbuf___19252 = (r0);
    r0 = pxsim.pins.i2cReadBuffer(globals.IIC_ADDRESS___18515, 2, false);
    s.recbuf___19252 = (r0);
    r0 = pxsim.BufferMethods.getByte(s.recbuf___19252, 0);
    s.tempId___19238 = (r0);
    r0 = pxsim.BufferMethods.getByte(s.recbuf___19252, 1);
    s.tempStatus___19239 = (r0);
    s.tmp_0 = r0 = s.tempId___19238;
    r0 = pxsim_pxtcore.switch_eq(globals.READ_PING___18601, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.READ_WIFISTATUS___18603, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.READ_MQTTSTATUS___18607, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.READ_SUBSTATUS___18609, s.tmp_0);
    if (r0) { step = 20; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.READ_IP___18605, s.tmp_0);
    if (r0) { step = 25; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.SUB_TOPIC0___18573, s.tmp_0);
    if (r0) { step = 28; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.SUB_TOPIC1___18575, s.tmp_0);
    if (r0) { step = 31; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.SUB_TOPIC2___18577, s.tmp_0);
    if (r0) { step = 34; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.SUB_TOPIC3___18579, s.tmp_0);
    if (r0) { step = 37; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.SUB_TOPIC4___18581, s.tmp_0);
    if (r0) { step = 40; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.HTTP_REQUEST___18613, s.tmp_0);
    if (r0) { step = 43; continue; }
    r0 = pxsim_pxtcore.switch_eq(globals.READ_VERSION___18615, s.tmp_0);
    if (r0) { step = 44; continue; }
    r0 = s.tmp_0;
    { step = 45; continue; }
  case 1:
    r0 = (s.tempStatus___19239 == globals.PING_OK___18617);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 2; continue; }
    globals.microIoTStatus___18634 = ("PingOK");
    { step = 3; continue; }
  case 2:
    globals.microIoTStatus___18634 = ("PingERR");
  case 3:
    { step = 46; continue; }
  case 4:
    r0 = (s.tempStatus___19239 == globals.WIFI_CONNECTING___18621);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    globals.microIoTStatus___18634 = ("WiFiConnecting");
    { step = 12; continue; }
  case 5:
    r0 = (s.tempStatus___19239 == globals.WIFI_CONNECTED___18623);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    globals.microIoTStatus___18634 = ("WiFiConnected");
    { step = 11; continue; }
  case 6:
    r0 = (s.tempStatus___19239 == globals.WIFI_DISCONNECT___18619);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    globals.microIoTStatus___18634 = ("WiFiDisconnect");
    r0 = (globals.wifiConnected___18653 + 1);
    globals.wifiConnected___18653 = (r0);
    r0 = (globals.wifiConnected___18653 == 2);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    globals.wifiConnected___18653 = (0);
    s.tmp_0 = microIoT_microIoT_runCommand__P18664_mk(s);
    s.tmp_0.arg0 = globals.WIFI_CONNECTED___18623;
    s.callLocIdx = 78; s.pc = 47; return s.tmp_0;
  case 47:
    r0 = s.retval;
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    { step = 46; continue; }
  case 13:
    r0 = (s.tempStatus___19239 == globals.MQTT_CONNECTED___18625);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    globals.microIoTStatus___18634 = ("MQTTConnected");
    globals.mqttState___18655 = (1);
    { step = 19; continue; }
  case 14:
    r0 = (s.tempStatus___19239 == globals.MQTT_CONNECTERR___18627);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    globals.microIoTStatus___18634 = ("MQTTConnectERR");
    { step = 18; continue; }
  case 15:
    r0 = (s.tempStatus___19239 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    s.tmp_1 = microIoT_microIoT_runCommand__P18664_mk(s);
    s.tmp_1.arg0 = globals.DISCONNECT_MQTT___18629;
    s.callLocIdx = 79; s.pc = 48; return s.tmp_1;
  case 48:
    r0 = s.retval;
    s.tmp_0 = microIoT_microIoT_runCommand__P18664_mk(s);
    s.tmp_0.arg0 = globals.WIFI_CONNECTED___18623;
    s.callLocIdx = 80; s.pc = 49; return s.tmp_0;
  case 49:
    r0 = s.retval;
  case 16:
  case 17:
  case 18:
  case 19:
    { step = 46; continue; }
  case 20:
    r0 = (s.tempStatus___19239 == globals.SUB_TOPIC_OK___18631);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 21; continue; }
    globals.microIoTStatus___18634 = ("SubTopicOK");
    { step = 24; continue; }
  case 21:
    r0 = (s.tempStatus___19239 == globals.SUB_TOPIC_Ceiling___18633);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 22; continue; }
    globals.microIoTStatus___18634 = ("SubTopicCeiling");
    { step = 23; continue; }
  case 22:
    globals.microIoTStatus___18634 = ("SubTopicERR");
  case 23:
  case 24:
    { step = 46; continue; }
  case 25:
    globals.microIoTStatus___18634 = ("READ_IP");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 81; s.pc = 50; return s.tmp_0;
  case 50:
    r0 = s.retval;
    globals.microIoT_IP___18649 = (globals.RECDATA___18646);
    r0 = (globals.mqttState___18655 == 1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 26; continue; }
    globals.mqttState___18655 = (0);
    s.tmp_0 = microIoT_microIoT_runCommand__P18664_mk(s);
    s.tmp_0.arg0 = globals.DISCONNECT_MQTT___18629;
    s.callLocIdx = 82; s.pc = 51; return s.tmp_0;
  case 51:
    r0 = s.retval;
    setupResume(s, 52);
    pxsim.basic.pause(200);
    checkResumeConsumed();
    return;
  case 52:
    r0 = s.retval;
    s.tmp_0 = microIoT_microIoT_runCommand__P18664_mk(s);
    s.tmp_0.arg0 = globals.CONNECT_MQTT___18571;
    s.callLocIdx = 83; s.pc = 53; return s.tmp_0;
  case 53:
    r0 = s.retval;
  case 26:
  case 27:
    { step = 46; continue; }
  case 28:
    globals.microIoTStatus___18634 = ("READ_TOPICDATA");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 84; s.pc = 54; return s.tmp_0;
  case 54:
    r0 = s.retval;
    r0 = (globals.Topic0CallBack___18521 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 29; continue; }
    s.tmp_1 = lambda_1_mk(s);
    s.tmp_1.argL = globals.Topic0CallBack___18521;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 85; s.pc = 55; return s.tmp_1;
  case 55:
    r0 = s.retval;
  case 29:
  case 30:
    { step = 46; continue; }
  case 31:
    globals.microIoTStatus___18634 = ("READ_TOPICDATA");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 86; s.pc = 56; return s.tmp_0;
  case 56:
    r0 = s.retval;
    r0 = (globals.Topic1CallBack___18523 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 32; continue; }
    s.tmp_1 = lambda_1_mk(s);
    s.tmp_1.argL = globals.Topic1CallBack___18523;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 87; s.pc = 57; return s.tmp_1;
  case 57:
    r0 = s.retval;
  case 32:
  case 33:
    { step = 46; continue; }
  case 34:
    globals.microIoTStatus___18634 = ("READ_TOPICDATA");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 88; s.pc = 58; return s.tmp_0;
  case 58:
    r0 = s.retval;
    r0 = (globals.Topic2CallBack___18525 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 35; continue; }
    s.tmp_1 = lambda_1_mk(s);
    s.tmp_1.argL = globals.Topic2CallBack___18525;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 89; s.pc = 59; return s.tmp_1;
  case 59:
    r0 = s.retval;
  case 35:
  case 36:
    { step = 46; continue; }
  case 37:
    globals.microIoTStatus___18634 = ("READ_TOPICDATA");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 90; s.pc = 60; return s.tmp_0;
  case 60:
    r0 = s.retval;
    r0 = (globals.Topic3CallBack___18527 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 38; continue; }
    s.tmp_1 = lambda_1_mk(s);
    s.tmp_1.argL = globals.Topic3CallBack___18527;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 91; s.pc = 61; return s.tmp_1;
  case 61:
    r0 = s.retval;
  case 38:
  case 39:
    { step = 46; continue; }
  case 40:
    globals.microIoTStatus___18634 = ("READ_TOPICDATA");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 92; s.pc = 62; return s.tmp_0;
  case 62:
    r0 = s.retval;
    r0 = (globals.Topic4CallBack___18529 != null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 41; continue; }
    s.tmp_1 = lambda_1_mk(s);
    s.tmp_1.argL = globals.Topic4CallBack___18529;
    setupLambda(s.tmp_1, s.tmp_1.argL);
    s.callLocIdx = 93; s.pc = 63; return s.tmp_1;
  case 63:
    r0 = s.retval;
  case 41:
  case 42:
    { step = 46; continue; }
  case 43:
    globals.microIoTStatus___18634 = ("HTTP_REQUEST");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 94; s.pc = 64; return s.tmp_0;
  case 64:
    r0 = s.retval;
    { step = 46; continue; }
  case 44:
    globals.microIoTStatus___18634 = ("READ_VERSION");
    s.tmp_0 = microIoT_microIoT_GetData__P18686_mk(s);
    s.tmp_0.arg0 = s.tempStatus___19239;
    s.callLocIdx = 95; s.pc = 65; return s.tmp_0;
  case 65:
    r0 = s.retval;
    { step = 46; continue; }
  case 45:
  case 46:
    setupResume(s, 66);
    pxsim.basic.pause(200);
    checkResumeConsumed();
    return;
  case 66:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
microIoT_microIoT_InquireStatus__P18687.info = {"start":23692,"length":4260,"line":792,"column":4,"endLine":907,"endColumn":5,"fileName":"pxt_modules/IoT_Cloud_Kit/microiotkit.ts","functionName":"microIoT_InquireStatus","argumentNames":[]}

function microIoT_microIoT_InquireStatus__P18687_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: microIoT_microIoT_InquireStatus__P18687, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___19235: undefined,
  tempId___19238: undefined,
  tempStatus___19239: undefined,
  recbuf___19252: undefined,
} }





function microIoT_microIoT_GetData__P18686(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.tempbuf___19384 = undefined;
    s.tempRecbuf___19394 = undefined;
    s.i___19403 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.mkEmpty();
    globals.RECDATA___18646 = (r0);
    r0 = pxsim.pins.createBuffer(1);
    s.tempbuf___19384 = (r0);
    r0 = pxsim.BufferMethods.setByte(s.tempbuf___19384, 0, 34);
    r0 = pxsim.pins.i2cWriteBuffer(globals.IIC_ADDRESS___18515, s.tempbuf___19384, 0);
    r0 = pxsim.pins.createBuffer(s.arg0);
    s.tempRecbuf___19394 = (r0);
    r0 = pxsim.pins.i2cReadBuffer(globals.IIC_ADDRESS___18515, s.arg0, false);
    s.tempRecbuf___19394 = (r0);
    s.i___19403 = (0);
  case 1:
    r0 = (s.i___19403 < s.arg0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    if ((globals.RECDATA___18646) && (globals.RECDATA___18646).vtable) {
    setupResume(s, 3);
    pxsim_String__stringConv(globals.RECDATA___18646);
    checkResumeConsumed();
    return;
    } else { s.retval = (globals.RECDATA___18646) + ""; }
  case 3:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.BufferMethods.getByte(s.tempRecbuf___19394, s.i___19403);
    s.tmp_4 = r0;
    r0 = pxsim_String_.fromCharCode(s.tmp_4);
    s.tmp_3 = r0;
    if ((s.tmp_3) && (s.tmp_3).vtable) {
    setupResume(s, 4);
    pxsim_String__stringConv(s.tmp_3);
    checkResumeConsumed();
    return;
    } else { s.retval = (s.tmp_3) + ""; }
  case 4:
    r0 = s.retval;
    s.tmp_2 = r0;
    r0 = pxsim_String__concat(s.tmp_1, s.tmp_2);
    globals.RECDATA___18646 = (r0);
    r0 = (s.i___19403 + 1);
    s.i___19403 = (r0);
    { step = 1; continue; }
  case 2:
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
microIoT_microIoT_GetData__P18686.info = {"start":23271,"length":414,"line":779,"column":4,"endLine":789,"endColumn":5,"fileName":"pxt_modules/IoT_Cloud_Kit/microiotkit.ts","functionName":"microIoT_GetData","argumentNames":["len"]}

function microIoT_microIoT_GetData__P18686_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: microIoT_microIoT_GetData__P18686, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tempbuf___19384: undefined,
  tempRecbuf___19394: undefined,
  i___19403: undefined,
  arg0: undefined,
} }





function microIoT_microIoT_runCommand__P18664(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___19420 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(3);
    s.buf___19420 = (r0);
    r0 = pxsim.BufferMethods.setByte(s.buf___19420, 0, 30);
    r0 = pxsim.BufferMethods.setByte(s.buf___19420, 1, globals.RUN_COMMAND___18543);
    r0 = pxsim.BufferMethods.setByte(s.buf___19420, 2, s.arg0);
    r0 = pxsim.pins.i2cWriteBuffer(globals.IIC_ADDRESS___18515, s.buf___19420, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
microIoT_microIoT_runCommand__P18664.info = {"start":9348,"length":214,"line":358,"column":4,"endLine":364,"endColumn":5,"fileName":"pxt_modules/IoT_Cloud_Kit/microiotkit.ts","functionName":"microIoT_runCommand","argumentNames":["cmd"]}

function microIoT_microIoT_runCommand__P18664_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: microIoT_microIoT_runCommand__P18664, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  buf___19420: undefined,
  arg0: undefined,
} }





function Environment_setreg__P18171(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___19438 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.lambdaArgs = null;
    }
    r0 = pxsim.pins.createBuffer(2);
    s.buf___19438 = (r0);
    r0 = pxsim.BufferMethods.setByte(s.buf___19438, 0, s.arg0);
    r0 = pxsim.BufferMethods.setByte(s.buf___19438, 1, s.arg1);
    r0 = pxsim.pins.i2cWriteBuffer(globals.BME280_I2C_ADDR___18071, s.buf___19438, 0);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
Environment_setreg__P18171.info = {"start":2908,"length":190,"line":118,"column":4,"endLine":123,"endColumn":5,"fileName":"pxt_modules/Environment-and-Science-IoT/environment.ts","functionName":"setreg","argumentNames":["reg","dat"]}

function Environment_setreg__P18171_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Environment_setreg__P18171, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  buf___19438: undefined,
  arg0: undefined,
  arg1: undefined,
} }





function Environment_getInt8LE__P18163(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = pins_i2cWriteNumber__P17249_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = 7;
    s.tmp_0.arg3 = undefined;
    s.callLocIdx = 72; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = pins_i2cReadNumber__P17248_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = 1;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 73; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Environment_getInt8LE__P18163.info = {"start":3301,"length":193,"line":130,"column":4,"endLine":133,"endColumn":5,"fileName":"pxt_modules/Environment-and-Science-IoT/environment.ts","functionName":"getInt8LE","argumentNames":["reg"]}

function Environment_getInt8LE__P18163_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Environment_getInt8LE__P18163, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function pins_i2cWriteNumber__P17249(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___19519 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.arg3 = (s.lambdaArgs[3]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = pins_sizeOf__P17263_mk(s);
    s.tmp_1.arg0 = s.arg2;
    s.callLocIdx = 8; s.pc = 1; return s.tmp_1;
  case 1:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim.pins.createBuffer(s.tmp_0);
    s.buf___19519 = (r0);
    r0 = pxsim.BufferMethods.setNumber(s.buf___19519, s.arg2, 0, s.arg1);
    r0 = pxsim.pins.i2cWriteBuffer(s.arg0, s.buf___19519, s.arg3);
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pins_i2cWriteNumber__P17249.info = {"start":1926,"length":262,"line":40,"column":4,"endLine":44,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"i2cWriteNumber","argumentNames":["address","value","format","repeated"]}

function pins_i2cWriteNumber__P17249_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_i2cWriteNumber__P17249, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  buf___19519: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
  arg3: undefined,
} }





function pins_sizeOf__P17263(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = Buffer_sizeOfNumberFormat__P17299_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.callLocIdx = 9; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
pins_sizeOf__P17263.info = {"start":42,"length":101,"line":2,"column":4,"endLine":4,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"sizeOf","argumentNames":["format"]}

function pins_sizeOf__P17263_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_sizeOf__P17263, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Buffer_sizeOfNumberFormat__P17299(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    r0 = pxsim_pxtcore.switch_eq(1, s.tmp_0);
    if (r0) { step = 1; continue; }
    r0 = pxsim_pxtcore.switch_eq(2, s.tmp_0);
    if (r0) { step = 2; continue; }
    r0 = pxsim_pxtcore.switch_eq(6, s.tmp_0);
    if (r0) { step = 3; continue; }
    r0 = pxsim_pxtcore.switch_eq(7, s.tmp_0);
    if (r0) { step = 4; continue; }
    r0 = pxsim_pxtcore.switch_eq(3, s.tmp_0);
    if (r0) { step = 5; continue; }
    r0 = pxsim_pxtcore.switch_eq(4, s.tmp_0);
    if (r0) { step = 6; continue; }
    r0 = pxsim_pxtcore.switch_eq(8, s.tmp_0);
    if (r0) { step = 7; continue; }
    r0 = pxsim_pxtcore.switch_eq(9, s.tmp_0);
    if (r0) { step = 8; continue; }
    r0 = pxsim_pxtcore.switch_eq(5, s.tmp_0);
    if (r0) { step = 9; continue; }
    r0 = pxsim_pxtcore.switch_eq(10, s.tmp_0);
    if (r0) { step = 10; continue; }
    r0 = pxsim_pxtcore.switch_eq(12, s.tmp_0);
    if (r0) { step = 11; continue; }
    r0 = pxsim_pxtcore.switch_eq(11, s.tmp_0);
    if (r0) { step = 12; continue; }
    r0 = pxsim_pxtcore.switch_eq(15, s.tmp_0);
    if (r0) { step = 13; continue; }
    r0 = pxsim_pxtcore.switch_eq(13, s.tmp_0);
    if (r0) { step = 14; continue; }
    r0 = pxsim_pxtcore.switch_eq(16, s.tmp_0);
    if (r0) { step = 15; continue; }
    r0 = pxsim_pxtcore.switch_eq(14, s.tmp_0);
    if (r0) { step = 16; continue; }
    r0 = s.tmp_0;
    { step = 17; continue; }
  case 1:
  case 2:
  case 3:
  case 4:
    r0 = 1;
    { step = 18; continue; }
  case 5:
  case 6:
  case 7:
  case 8:
    r0 = 2;
    { step = 18; continue; }
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
    r0 = 4;
    { step = 18; continue; }
  case 15:
  case 16:
    r0 = 8;
    { step = 18; continue; }
  case 17:
    r0 = 0;
  case 18:
    return leave(s, r0)
  default: oops()
} } }
Buffer_sizeOfNumberFormat__P17299.info = {"start":14912,"length":856,"line":508,"column":4,"endLine":532,"endColumn":5,"fileName":"pxt_modules/core/buffer.ts","functionName":"sizeOfNumberFormat","argumentNames":["format"]}

function Buffer_sizeOfNumberFormat__P17299_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Buffer_sizeOfNumberFormat__P17299, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function pins_i2cReadNumber__P17248(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.buf___19467 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = r0 = s.arg0;
    s.tmp_2 = pins_sizeOf__P17263_mk(s);
    s.tmp_2.arg0 = s.arg1;
    s.callLocIdx = 7; s.pc = 1; return s.tmp_2;
  case 1:
    r0 = s.retval;
    s.tmp_1 = r0;
    r0 = pxsim.pins.i2cReadBuffer(s.tmp_0, s.tmp_1, s.arg2);
    s.buf___19467 = (r0);
    r0 = pxsim.BufferMethods.getNumber(s.buf___19467, s.arg1, 0);
    return leave(s, r0)
  default: oops()
} } }
pins_i2cReadNumber__P17248.info = {"start":1398,"length":221,"line":28,"column":4,"endLine":31,"endColumn":5,"fileName":"pxt_modules/core/pins.ts","functionName":"i2cReadNumber","argumentNames":["address","format","repeated"]}

function pins_i2cReadNumber__P17248_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pins_i2cReadNumber__P17248, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  buf___19467: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function Environment_getreg__P18126(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = pins_i2cWriteNumber__P17249_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = 7;
    s.tmp_0.arg3 = undefined;
    s.callLocIdx = 70; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = pins_i2cReadNumber__P17248_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = 7;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 71; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Environment_getreg__P18126.info = {"start":3104,"length":191,"line":125,"column":4,"endLine":128,"endColumn":5,"fileName":"pxt_modules/Environment-and-Science-IoT/environment.ts","functionName":"getreg","argumentNames":["reg"]}

function Environment_getreg__P18126_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Environment_getreg__P18126, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Environment_getInt16LE__P18081(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = pins_i2cWriteNumber__P17249_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = 7;
    s.tmp_0.arg3 = undefined;
    s.callLocIdx = 76; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = pins_i2cReadNumber__P17248_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = 3;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 77; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Environment_getInt16LE__P18081.info = {"start":3703,"length":195,"line":140,"column":4,"endLine":143,"endColumn":5,"fileName":"pxt_modules/Environment-and-Science-IoT/environment.ts","functionName":"getInt16LE","argumentNames":["reg"]}

function Environment_getInt16LE__P18081_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Environment_getInt16LE__P18081, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function Environment_getUInt16LE__P18076(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_0 = pins_i2cWriteNumber__P17249_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = s.arg0;
    s.tmp_0.arg2 = 7;
    s.tmp_0.arg3 = undefined;
    s.callLocIdx = 74; s.pc = 1; return s.tmp_0;
  case 1:
    r0 = s.retval;
    s.tmp_0 = pins_i2cReadNumber__P17248_mk(s);
    s.tmp_0.arg0 = globals.BME280_I2C_ADDR___18071;
    s.tmp_0.arg1 = 4;
    s.tmp_0.arg2 = undefined;
    s.callLocIdx = 75; s.pc = 2; return s.tmp_0;
  case 2:
    r0 = s.retval;
    return leave(s, r0)
  default: oops()
} } }
Environment_getUInt16LE__P18076.info = {"start":3500,"length":197,"line":135,"column":4,"endLine":138,"endColumn":5,"fileName":"pxt_modules/Environment-and-Science-IoT/environment.ts","functionName":"getUInt16LE","argumentNames":["reg"]}

function Environment_getUInt16LE__P18076_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: Environment_getUInt16LE__P18076, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  arg0: undefined,
} }





function helpers_stringSplit__P16911(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.A___19568 = undefined;
    s.lim___19570 = undefined;
    s.s___19586 = undefined;
    s.p___19590 = undefined;
    s.R___19591 = undefined;
    s.z___19605 = undefined;
    s.T___19618 = undefined;
    s.q___19619 = undefined;
    s.e___19625 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_Array__mk();
    s.A___19568 = (r0);
    s.lim___19570 = (0);
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = (536870912 - 1);
    s.lim___19570 = (r0);
    { step = 4; continue; }
  case 1:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 2; continue; }
    s.lim___19570 = (0);
    { step = 3; continue; }
  case 2:
    r0 = (s.arg2 | 0);
    s.lim___19570 = (r0);
  case 3:
  case 4:
    r0 = pxsim_String_.length(s.arg0);
    s.s___19586 = (r0);
    s.p___19590 = (0);
    s.R___19591 = (s.arg1);
    r0 = (s.lim___19570 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 5; continue; }
    r0 = s.A___19568;
    { step = 21; continue; }
  case 5:
  case 6:
    r0 = (s.arg1 === undefined);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 7; continue; }
    r0 = pxsim_Array_.setAt(s.A___19568, 0, s.arg0);
    r0 = s.A___19568;
    { step = 21; continue; }
  case 7:
  case 8:
    r0 = (s.s___19586 == 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 11; continue; }
    s.tmp_1 = helpers_splitMatch__P16912_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = 0;
    s.tmp_1.arg2 = s.R___19591;
    s.callLocIdx = 1; s.pc = 22; return s.tmp_1;
  case 22:
    r0 = s.retval;
    s.z___19605 = (r0);
    r0 = (s.z___19605 > -1);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 9; continue; }
    r0 = s.A___19568;
    { step = 21; continue; }
  case 9:
  case 10:
    r0 = pxsim_Array_.setAt(s.A___19568, 0, s.arg0);
    r0 = s.A___19568;
    { step = 21; continue; }
  case 11:
  case 12:
    s.q___19619 = (s.p___19590);
  case 13:
    r0 = (s.q___19619 != s.s___19586);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 20; continue; }
    s.tmp_1 = helpers_splitMatch__P16912_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.tmp_1.arg1 = s.q___19619;
    s.tmp_1.arg2 = s.R___19591;
    s.callLocIdx = 2; s.pc = 23; return s.tmp_1;
  case 23:
    r0 = s.retval;
    s.e___19625 = (r0);
    r0 = (s.e___19625 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 14; continue; }
    r0 = (s.q___19619 + 1);
    s.q___19619 = (r0);
    { step = 19; continue; }
  case 14:
    r0 = (s.e___19625 == s.p___19590);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 15; continue; }
    r0 = (s.q___19619 + 1);
    s.q___19619 = (r0);
    { step = 18; continue; }
  case 15:
    s.tmp_0 = helpers_stringSlice__P16908_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___19590;
    s.tmp_0.arg2 = s.q___19619;
    s.callLocIdx = 3; s.pc = 24; return s.tmp_0;
  case 24:
    r0 = s.retval;
    s.T___19618 = (r0);
    r0 = pxsim_Array__push(s.A___19568, s.T___19618);
    r0 = pxsim_Array__length(s.A___19568);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 == s.lim___19570);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 16; continue; }
    r0 = s.A___19568;
    { step = 21; continue; }
  case 16:
  case 17:
    s.p___19590 = (s.e___19625);
    s.q___19619 = (s.p___19590);
  case 18:
  case 19:
    { step = 13; continue; }
  case 20:
    s.tmp_0 = helpers_stringSlice__P16908_mk(s);
    s.tmp_0.arg0 = s.arg0;
    s.tmp_0.arg1 = s.p___19590;
    s.tmp_0.arg2 = s.q___19619;
    s.callLocIdx = 4; s.pc = 25; return s.tmp_0;
  case 25:
    r0 = s.retval;
    s.T___19618 = (r0);
    r0 = pxsim_Array__push(s.A___19568, s.T___19618);
    r0 = s.A___19568;
  case 21:
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSplit__P16911.info = {"start":12919,"length":1319,"line":434,"column":4,"endLine":478,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"stringSplit","argumentNames":["S","separator","limit"]}

function helpers_stringSplit__P16911_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSplit__P16911, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  A___19568: undefined,
  lim___19570: undefined,
  s___19586: undefined,
  p___19590: undefined,
  R___19591: undefined,
  z___19605: undefined,
  T___19618: undefined,
  q___19619: undefined,
  e___19625: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_splitMatch__P16912(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.r___19672 = undefined;
    s.s___19675 = undefined;
    s.i___19685 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg2);
    s.r___19672 = (r0);
    r0 = pxsim_String_.length(s.arg0);
    s.s___19675 = (r0);
    r0 = (s.arg1 + s.r___19672);
    s.tmp_1 = r0;
    r0 = (s.tmp_1 > s.s___19675);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 1:
  case 2:
    s.i___19685 = (0);
  case 3:
    r0 = (s.i___19685 < s.r___19672);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 6; continue; }
    s.tmp_3 = r0 = s.arg0;
    r0 = (s.arg1 + s.i___19685);
    s.tmp_4 = r0;
    r0 = pxsim_String_.charAt(s.tmp_3, s.tmp_4);
    s.tmp_2 = r0;
    r0 = pxsim_String_.charAt(s.arg2, s.i___19685);
    s.tmp_5 = r0;
    r0 = (s.tmp_2 != s.tmp_5);
    s.tmp_1 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_1);
    if (!r0) { step = 4; continue; }
    r0 = -1;
    { step = 7; continue; }
  case 4:
  case 5:
    r0 = (s.i___19685 + 1);
    s.i___19685 = (r0);
    { step = 3; continue; }
  case 6:
    r0 = (s.arg1 + s.r___19672);
  case 7:
    return leave(s, r0)
  default: oops()
} } }
helpers_splitMatch__P16912.info = {"start":14244,"length":289,"line":480,"column":4,"endLine":489,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"splitMatch","argumentNames":["S","q","R"]}

function helpers_splitMatch__P16912_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_splitMatch__P16912, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  tmp_5: undefined,
  r___19672: undefined,
  s___19675: undefined,
  i___19685: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function helpers_stringSlice__P16908(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    s.len___19709 = undefined;
    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.arg1 = (s.lambdaArgs[1]);
      s.arg2 = (s.lambdaArgs[2]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.length(s.arg0);
    s.len___19709 = (r0);
    r0 = (s.arg1 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.tmp_1 = Math_max__P16919_mk(s);
    r0 = (s.len___19709 + s.arg1);
    s.tmp_1.arg0 = r0;
    s.tmp_1.arg1 = 0;
    s.callLocIdx = 0; s.pc = 9; return s.tmp_1;
  case 9:
    r0 = s.retval;
    s.arg1 = (r0);
  case 1:
  case 2:
    r0 = (s.arg2 === undefined);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 3; continue; }
    s.arg2 = (s.len___19709);
    { step = 6; continue; }
  case 3:
    r0 = (s.arg2 === null);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 4; continue; }
    s.arg2 = (0);
  case 4:
  case 5:
  case 6:
    r0 = (s.arg2 < 0);
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 7; continue; }
    r0 = (s.len___19709 + s.arg2);
    s.arg2 = (r0);
  case 7:
  case 8:
    s.tmp_0 = r0 = s.arg0;
    s.tmp_1 = r0 = s.arg1;
    r0 = (s.arg2 - s.arg1);
    s.tmp_2 = r0;
    r0 = pxsim_String_.substr(s.tmp_0, s.tmp_1, s.tmp_2);
    return leave(s, r0)
  default: oops()
} } }
helpers_stringSlice__P16908.info = {"start":11496,"length":440,"line":384,"column":4,"endLine":402,"endColumn":5,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"stringSlice","argumentNames":["s","start","end"]}

function helpers_stringSlice__P16908_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: helpers_stringSlice__P16908, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  len___19709: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }





function pause__P17057(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    s.tmp_1 = isNaN__P16881_mk(s);
    s.tmp_1.arg0 = s.arg0;
    s.callLocIdx = 5; s.pc = 3; return s.tmp_1;
  case 3:
    r0 = s.retval;
    s.tmp_0 = r0;
    r0 = pxsim_numops_toBoolDecr(s.tmp_0);
    if (!r0) { step = 1; continue; }
    s.arg0 = (20);
  case 1:
  case 2:
    setupResume(s, 4);
    pxsim.basic.pause(s.arg0);
    checkResumeConsumed();
    return;
  case 4:
    r0 = s.retval;
    r0 = undefined;
    return leave(s, r0)
  default: oops()
} } }
pause__P17057.info = {"start":737,"length":84,"line":23,"column":0,"endLine":26,"endColumn":1,"fileName":"pxt_modules/core/basic.ts","functionName":"pause","argumentNames":["ms"]}

function pause__P17057_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: pause__P17057, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  arg0: undefined,
} }





function isNaN__P16881(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = (s.arg0 - 0);
    s.arg0 = (r0);
    r0 = (s.arg0 !== s.arg0);
    return leave(s, r0)
  default: oops()
} } }
isNaN__P16881.info = {"start":169,"length":80,"line":12,"column":0,"endLine":15,"endColumn":1,"fileName":"pxt_modules/core/pxt-helpers.ts","functionName":"isNaN","argumentNames":["x"]}

function isNaN__P16881_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: isNaN__P16881, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }





function serial_delimiters__P17262(s) {
let r0 = s.r0, step = s.pc;
s.pc = -1;


while (true) {
if (yieldSteps-- < 0 && maybeYield(s, step, r0) || runtime !== pxsim.runtime) return null;
switch (step) {
  case 0:

    if (s.lambdaArgs) {
      s.arg0 = (s.lambdaArgs[0]);
      s.lambdaArgs = null;
    }
    r0 = pxsim_String_.fromCharCode(s.arg0);
    return leave(s, r0)
  default: oops()
} } }
serial_delimiters__P17262.info = {"start":3655,"length":110,"line":125,"column":4,"endLine":127,"endColumn":5,"fileName":"pxt_modules/core/serial.ts","functionName":"delimiters","argumentNames":["del"]}

function serial_delimiters__P17262_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: serial_delimiters__P17262, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  arg0: undefined,
} }




function lambda_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_3_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
  arg2: undefined,
} }


function if_switchOff_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_switchOn_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function lambda_2_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
  arg1: undefined,
} }


function if_PostIFTTT_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_ConnectWifi_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_ConnectThingSpeak_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_ConnectKidsIot_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_InitKidsIot_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_UploadKidsIot_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_DisconnectKidsIot_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }


function if_ConnectMqtt_1_mk(s) {
    checkStack(s.depth);
    return {
        parent: s, fn: null, depth: s.depth + 1,
        pc: 0, retval: undefined, r0: undefined, overwrittenPC: false, lambdaArgs: null,
  tmp_0: undefined,
  tmp_1: undefined,
  tmp_2: undefined,
  tmp_3: undefined,
  tmp_4: undefined,
  arg0: undefined,
} }

const datalogger_ColumnValue__C18888_VT = mkVTable({
  name: "ColumnValue",
  numFields: 2,
  classNo: 16,
  lastSubtypeNo: 16,
  maxBgInstances: null,
  methods: {
  },
  iface: {
    "value": null,
    "set/value": null,
    "column": null,
    "set/column": null,
  },
});

const breakpoints = setupDebugger(1, ["Logging___46857"])

return _main___P48689
})
