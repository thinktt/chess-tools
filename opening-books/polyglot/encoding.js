"use strict";
const utils = require("../../utils.js");
const Uint64BE = require("int64-buffer").Uint64BE;

const promotionPieces = " nbrq".split("");
const files = utils.board.FILES;
module.exports.pieceTypes = {
    bp: 0,
    wp: 1,
    bn: 2,
    wn: 3,
    bb: 4,
    wb: 5,
    br: 6,
    wr: 7,
    bq: 8,
    wq: 9,
    bk: 10,
    wk: 11
};

const Random64 = [
    Uint64BE(0x9D39247E, 0x33776D41), Uint64BE(0x2AF73980, 0x05AAA5C7), Uint64BE(0x44DB0150, 0x24623547), Uint64BE(0x9C15F73E, 0x62A76AE2),
    Uint64BE(0x75834465, 0x489C0C89), Uint64BE(0x3290AC3A, 0x203001BF), Uint64BE(0x0FBBAD1F, 0x61042279), Uint64BE(0xE83A908F, 0xF2FB60CA),
    Uint64BE(0x0D7E765D, 0x58755C10), Uint64BE(0x1A083822, 0xCEAFE02D), Uint64BE(0x9605D5F0, 0xE25EC3B0), Uint64BE(0xD021FF5C, 0xD13A2ED5),
    Uint64BE(0x40BDF15D, 0x4A672E32), Uint64BE(0x01135514, 0x6FD56395), Uint64BE(0x5DB48320, 0x46F3D9E5), Uint64BE(0x239F8B2D, 0x7FF719CC),
    Uint64BE(0x05D1A1AE, 0x85B49AA1), Uint64BE(0x679F848F, 0x6E8FC971), Uint64BE(0x7449BBFF, 0x801FED0B), Uint64BE(0x7D11CDB1, 0xC3B7ADF0),
    Uint64BE(0x82C7709E, 0x781EB7CC), Uint64BE(0xF3218F1C, 0x9510786C), Uint64BE(0x331478F3, 0xAF51BBE6), Uint64BE(0x4BB38DE5, 0xE7219443),
    Uint64BE(0xAA649C6E, 0xBCFD50FC), Uint64BE(0x8DBD98A3, 0x52AFD40B), Uint64BE(0x87D2074B, 0x81D79217), Uint64BE(0x19F3C751, 0xD3E92AE1),
    Uint64BE(0xB4AB30F0, 0x62B19ABF), Uint64BE(0x7B0500AC, 0x42047AC4), Uint64BE(0xC9452CA8, 0x1A09D85D), Uint64BE(0x24AA6C51, 0x4DA27500),
    Uint64BE(0x4C9F3442, 0x7501B447), Uint64BE(0x14A68FD7, 0x3C910841), Uint64BE(0xA71B9B83, 0x461CBD93), Uint64BE(0x03488B95, 0xB0F1850F),
    Uint64BE(0x637B2B34, 0xFF93C040), Uint64BE(0x09D1BC9A, 0x3DD90A94), Uint64BE(0x35756683, 0x34A1DD3B), Uint64BE(0x735E2B97, 0xA4C45A23),
    Uint64BE(0x18727070, 0xF1BD400B), Uint64BE(0x1FCBACD2, 0x59BF02E7), Uint64BE(0xD310A7C2, 0xCE9B6555), Uint64BE(0xBF983FE0, 0xFE5D8244),
    Uint64BE(0x9F74D14F, 0x7454A824), Uint64BE(0x51EBDC4A, 0xB9BA3035), Uint64BE(0x5C82C505, 0xDB9AB0FA), Uint64BE(0xFCF7FE8A, 0x3430B241),
    Uint64BE(0x3253A729, 0xB9BA3DDE), Uint64BE(0x8C74C368, 0x081B3075), Uint64BE(0xB9BC6C87, 0x167C33E7), Uint64BE(0x7EF48F2B, 0x83024E20),
    Uint64BE(0x11D505D4, 0xC351BD7F), Uint64BE(0x6568FCA9, 0x2C76A243), Uint64BE(0x4DE0B0F4, 0x0F32A7B8), Uint64BE(0x96D69346, 0x0CC37E5D),
    Uint64BE(0x42E240CB, 0x63689F2F), Uint64BE(0x6D2BDCDA, 0xE2919661), Uint64BE(0x42880B02, 0x36E4D951), Uint64BE(0x5F0F4A58, 0x98171BB6),
    Uint64BE(0x39F890F5, 0x79F92F88), Uint64BE(0x93C5B5F4, 0x7356388B), Uint64BE(0x63DC359D, 0x8D231B78), Uint64BE(0xEC16CA8A, 0xEA98AD76),
    Uint64BE(0x5355F900, 0xC2A82DC7), Uint64BE(0x07FB9F85, 0x5A997142), Uint64BE(0x5093417A, 0xA8A7ED5E), Uint64BE(0x7BCBC38D, 0xA25A7F3C),
    Uint64BE(0x19FC8A76, 0x8CF4B6D4), Uint64BE(0x637A7780, 0xDECFC0D9), Uint64BE(0x8249A47A, 0xEE0E41F7), Uint64BE(0x79AD6955, 0x01E7D1E8),
    Uint64BE(0x14ACBAF4, 0x777D5776), Uint64BE(0xF145B6BE, 0xCCDEA195), Uint64BE(0xDABF2AC8, 0x201752FC), Uint64BE(0x24C3C94D, 0xF9C8D3F6),
    Uint64BE(0xBB6E2924, 0xF03912EA), Uint64BE(0x0CE26C0B, 0x95C980D9), Uint64BE(0xA49CD132, 0xBFBF7CC4), Uint64BE(0xE99D662A, 0xF4243939),
    Uint64BE(0x27E6AD78, 0x91165C3F), Uint64BE(0x8535F040, 0xB9744FF1), Uint64BE(0x54B3F4FA, 0x5F40D873), Uint64BE(0x72B12C32, 0x127FED2B),
    Uint64BE(0xEE954D3C, 0x7B411F47), Uint64BE(0x9A85AC90, 0x9A24EAA1), Uint64BE(0x70AC4CD9, 0xF04F21F5), Uint64BE(0xF9B89D3E, 0x99A075C2),
    Uint64BE(0x87B3E2B2, 0xB5C907B1), Uint64BE(0xA366E5B8, 0xC54F48B8), Uint64BE(0xAE4A9346, 0xCC3F7CF2), Uint64BE(0x1920C04D, 0x47267BBD),
    Uint64BE(0x87BF02C6, 0xB49E2AE9), Uint64BE(0x092237AC, 0x237F3859), Uint64BE(0xFF07F64E, 0xF8ED14D0), Uint64BE(0x8DE8DCA9, 0xF03CC54E),
    Uint64BE(0x9C163326, 0x4DB49C89), Uint64BE(0xB3F22C3D, 0x0B0B38ED), Uint64BE(0x390E5FB4, 0x4D01144B), Uint64BE(0x5BFEA5B4, 0x712768E9),
    Uint64BE(0x1E103291, 0x1FA78984), Uint64BE(0x9A74ACB9, 0x64E78CB3), Uint64BE(0x4F80F7A0, 0x35DAFB04), Uint64BE(0x6304D09A, 0x0B3738C4),
    Uint64BE(0x2171E646, 0x83023A08), Uint64BE(0x5B9B63EB, 0x9CEFF80C), Uint64BE(0x506AACF4, 0x89889342), Uint64BE(0x1881AFC9, 0xA3A701D6),
    Uint64BE(0x65030804, 0x40750644), Uint64BE(0xDFD39533, 0x9CDBF4A7), Uint64BE(0xEF927DBC, 0xF00C20F2), Uint64BE(0x7B32F7D1, 0xE03680EC),
    Uint64BE(0xB9FD7620, 0xE7316243), Uint64BE(0x05A7E8A5, 0x7DB91B77), Uint64BE(0xB5889C6E, 0x15630A75), Uint64BE(0x4A750A09, 0xCE9573F7),
    Uint64BE(0xCF464CEC, 0x899A2F8A), Uint64BE(0xF538639C, 0xE705B824), Uint64BE(0x3C79A0FF, 0x5580EF7F), Uint64BE(0xEDE6C87F, 0x8477609D),
    Uint64BE(0x799E81F0, 0x5BC93F31), Uint64BE(0x86536B8C, 0xF3428A8C), Uint64BE(0x97D7374C, 0x60087B73), Uint64BE(0xA246637C, 0xFF328532),
    Uint64BE(0x043FCAE6, 0x0CC0EBA0), Uint64BE(0x920E4495, 0x35DD359E), Uint64BE(0x70EB093B, 0x15B290CC), Uint64BE(0x73A19219, 0x16591CBD),
    Uint64BE(0x56436C9F, 0xE1A1AA8D), Uint64BE(0xEFAC4B70, 0x633B8F81), Uint64BE(0xBB215798, 0xD45DF7AF), Uint64BE(0x45F20042, 0xF24F1768),
    Uint64BE(0x930F80F4, 0xE8EB7462), Uint64BE(0xFF6712FF, 0xCFD75EA1), Uint64BE(0xAE623FD6, 0x7468AA70), Uint64BE(0xDD2C5BC8, 0x4BC8D8FC),
    Uint64BE(0x7EED120D, 0x54CF2DD9), Uint64BE(0x22FE5454, 0x01165F1C), Uint64BE(0xC91800E9, 0x8FB99929), Uint64BE(0x808BD68E, 0x6AC10365),
    Uint64BE(0xDEC46814, 0x5B7605F6), Uint64BE(0x1BEDE3A3, 0xAEF53302), Uint64BE(0x43539603, 0xD6C55602), Uint64BE(0xAA969B5C, 0x691CCB7A),
    Uint64BE(0xA87832D3, 0x92EFEE56), Uint64BE(0x65942C7B, 0x3C7E11AE), Uint64BE(0xDED2D633, 0xCAD004F6), Uint64BE(0x21F08570, 0xF420E565),
    Uint64BE(0xB415938D, 0x7DA94E3C), Uint64BE(0x91B859E5, 0x9ECB6350), Uint64BE(0x10CFF333, 0xE0ED804A), Uint64BE(0x28AED140, 0xBE0BB7DD),
    Uint64BE(0xC5CC1D89, 0x724FA456), Uint64BE(0x5648F680, 0xF11A2741), Uint64BE(0x2D255069, 0xF0B7DAB3), Uint64BE(0x9BC5A38E, 0xF729ABD4),
    Uint64BE(0xEF2F0543, 0x08F6A2BC), Uint64BE(0xAF2042F5, 0xCC5C2858), Uint64BE(0x480412BA, 0xB7F5BE2A), Uint64BE(0xAEF3AF4A, 0x563DFE43),
    Uint64BE(0x19AFE59A, 0xE451497F), Uint64BE(0x52593803, 0xDFF1E840), Uint64BE(0xF4F076E6, 0x5F2CE6F0), Uint64BE(0x11379625, 0x747D5AF3),
    Uint64BE(0xBCE5D224, 0x8682C115), Uint64BE(0x9DA4243D, 0xE836994F), Uint64BE(0x066F70B3, 0x3FE09017), Uint64BE(0x4DC4DE18, 0x9B671A1C),
    Uint64BE(0x51039AB7, 0x712457C3), Uint64BE(0xC07A3F80, 0xC31FB4B4), Uint64BE(0xB46EE9C5, 0xE64A6E7C), Uint64BE(0xB3819A42, 0xABE61C87),
    Uint64BE(0x21A00793, 0x3A522A20), Uint64BE(0x2DF16F76, 0x1598AA4F), Uint64BE(0x763C4A13, 0x71B368FD), Uint64BE(0xF793C467, 0x02E086A0),
    Uint64BE(0xD7288E01, 0x2AEB8D31), Uint64BE(0xDE336A2A, 0x4BC1C44B), Uint64BE(0x0BF692B3, 0x8D079F23), Uint64BE(0x2C604A7A, 0x177326B3),
    Uint64BE(0x4850E73E, 0x03EB6064), Uint64BE(0xCFC447F1, 0xE53C8E1B), Uint64BE(0xB05CA3F5, 0x64268D99), Uint64BE(0x9AE182C8, 0xBC9474E8),
    Uint64BE(0xA4FC4BD4, 0xFC5558CA), Uint64BE(0xE755178D, 0x58FC4E76), Uint64BE(0x69B97DB1, 0xA4C03DFE), Uint64BE(0xF9B5B7C4, 0xACC67C96),
    Uint64BE(0xFC6A82D6, 0x4B8655FB), Uint64BE(0x9C684CB6, 0xC4D24417), Uint64BE(0x8EC97D29, 0x17456ED0), Uint64BE(0x6703DF9D, 0x2924E97E),
    Uint64BE(0xC547F57E, 0x42A7444E), Uint64BE(0x78E37644, 0xE7CAD29E), Uint64BE(0xFE9A44E9, 0x362F05FA), Uint64BE(0x08BD35CC, 0x38336615),
    Uint64BE(0x9315E5EB, 0x3A129ACE), Uint64BE(0x94061B87, 0x1E04DF75), Uint64BE(0xDF1D9F9D, 0x784BA010), Uint64BE(0x3BBA57B6, 0x8871B59D),
    Uint64BE(0xD2B7ADEE, 0xDED1F73F), Uint64BE(0xF7A255D8, 0x3BC373F8), Uint64BE(0xD7F4F244, 0x8C0CEB81), Uint64BE(0xD95BE88C, 0xD210FFA7),
    Uint64BE(0x336F52F8, 0xFF4728E7), Uint64BE(0xA74049DA, 0xC312AC71), Uint64BE(0xA2F61BB6, 0xE437FDB5), Uint64BE(0x4F2A5CB0, 0x7F6A35B3),
    Uint64BE(0x87D380BD, 0xA5BF7859), Uint64BE(0x16B9F7E0, 0x6C453A21), Uint64BE(0x7BA2484C, 0x8A0FD54E), Uint64BE(0xF3A678CA, 0xD9A2E38C),
    Uint64BE(0x39B0BF7D, 0xDE437BA2), Uint64BE(0xFCAF55C1, 0xBF8A4424), Uint64BE(0x18FCF680, 0x573FA594), Uint64BE(0x4C0563B8, 0x9F495AC3),
    Uint64BE(0x40E08793, 0x1A00930D), Uint64BE(0x8CFFA941, 0x2EB642C1), Uint64BE(0x68CA3905, 0x3261169F), Uint64BE(0x7A1EE967, 0xD27579E2),
    Uint64BE(0x9D1D60E5, 0x076F5B6F), Uint64BE(0x3810E399, 0xB6F65BA2), Uint64BE(0x32095B6D, 0x4AB5F9B1), Uint64BE(0x35CAB621, 0x09DD038A),
    Uint64BE(0xA90B2449, 0x9FCFAFB1), Uint64BE(0x77A225A0, 0x7CC2C6BD), Uint64BE(0x513E5E63, 0x4C70E331), Uint64BE(0x4361C0CA, 0x3F692F12),
    Uint64BE(0xD941ACA4, 0x4B20A45B), Uint64BE(0x528F7C86, 0x02C5807B), Uint64BE(0x52AB92BE, 0xB9613989), Uint64BE(0x9D1DFA2E, 0xFC557F73),
    Uint64BE(0x722FF175, 0xF572C348), Uint64BE(0x1D1260A5, 0x1107FE97), Uint64BE(0x7A249A57, 0xEC0C9BA2), Uint64BE(0x04208FE9, 0xE8F7F2D6),
    Uint64BE(0x5A110C60, 0x58B920A0), Uint64BE(0x0CD9A497, 0x658A5698), Uint64BE(0x56FD23C8, 0xF9715A4C), Uint64BE(0x284C847B, 0x9D887AAE),
    Uint64BE(0x04FEABFB, 0xBDB619CB), Uint64BE(0x742E1E65, 0x1C60BA83), Uint64BE(0x9A9632E6, 0x5904AD3C), Uint64BE(0x881B82A1, 0x3B51B9E2),
    Uint64BE(0x506E6744, 0xCD974924), Uint64BE(0xB0183DB5, 0x6FFC6A79), Uint64BE(0x0ED9B915, 0xC66ED37E), Uint64BE(0x5E11E86D, 0x5873D484),
    Uint64BE(0xF678647E, 0x3519AC6E), Uint64BE(0x1B85D488, 0xD0F20CC5), Uint64BE(0xDAB9FE65, 0x25D89021), Uint64BE(0x0D151D86, 0xADB73615),
    Uint64BE(0xA865A54E, 0xDCC0F019), Uint64BE(0x93C42566, 0xAEF98FFB), Uint64BE(0x99E7AFEA, 0xBE000731), Uint64BE(0x48CBFF08, 0x6DDF285A),
    Uint64BE(0x7F9B6AF1, 0xEBF78BAF), Uint64BE(0x58627E1A, 0x149BBA21), Uint64BE(0x2CD16E2A, 0xBD791E33), Uint64BE(0xD363EFF5, 0xF0977996),
    Uint64BE(0x0CE2A38C, 0x344A6EED), Uint64BE(0x1A804AAD, 0xB9CFA741), Uint64BE(0x907F3042, 0x1D78C5DE), Uint64BE(0x501F65ED, 0xB3034D07),
    Uint64BE(0x37624AE5, 0xA48FA6E9), Uint64BE(0x957BAF61, 0x700CFF4E), Uint64BE(0x3A6C2793, 0x4E31188A), Uint64BE(0xD4950353, 0x6ABCA345),
    Uint64BE(0x088E0495, 0x89C432E0), Uint64BE(0xF943AEE7, 0xFEBF21B8), Uint64BE(0x6C3B8E3E, 0x336139D3), Uint64BE(0x364F6FFA, 0x464EE52E),
    Uint64BE(0xD60F6DCE, 0xDC314222), Uint64BE(0x56963B0D, 0xCA418FC0), Uint64BE(0x16F50EDF, 0x91E513AF), Uint64BE(0xEF195591, 0x4B609F93),
    Uint64BE(0x565601C0, 0x364E3228), Uint64BE(0xECB53939, 0x887E8175), Uint64BE(0xBAC7A9A1, 0x8531294B), Uint64BE(0xB344C470, 0x397BBA52),
    Uint64BE(0x65D34954, 0xDAF3CEBD), Uint64BE(0xB4B81B3F, 0xA97511E2), Uint64BE(0xB4220611, 0x93D6F6A7), Uint64BE(0x07158240, 0x1C38434D),
    Uint64BE(0x7A13F18B, 0xBEDC4FF5), Uint64BE(0xBC4097B1, 0x16C524D2), Uint64BE(0x59B97885, 0xE2F2EA28), Uint64BE(0x99170A5D, 0xC3115544),
    Uint64BE(0x6F423357, 0xE7C6A9F9), Uint64BE(0x325928EE, 0x6E6F8794), Uint64BE(0xD0E43662, 0x28B03343), Uint64BE(0x565C31F7, 0xDE89EA27),
    Uint64BE(0x30F56114, 0x84119414), Uint64BE(0xD873DB39, 0x1292ED4F), Uint64BE(0x7BD94E1D, 0x8E17DEBC), Uint64BE(0xC7D9F168, 0x64A76E94),
    Uint64BE(0x947AE053, 0xEE56E63C), Uint64BE(0xC8C93882, 0xF9475F5F), Uint64BE(0x3A9BF55B, 0xA91F81CA), Uint64BE(0xD9A11FBB, 0x3D9808E4),
    Uint64BE(0x0FD22063, 0xEDC29FCA), Uint64BE(0xB3F256D8, 0xACA0B0B9), Uint64BE(0xB03031A8, 0xB4516E84), Uint64BE(0x35DD37D5, 0x871448AF),
    Uint64BE(0xE9F6082B, 0x05542E4E), Uint64BE(0xEBFAFA33, 0xD7254B59), Uint64BE(0x9255ABB5, 0x0D532280), Uint64BE(0xB9AB4CE5, 0x7F2D34F3),
    Uint64BE(0x693501D6, 0x28297551), Uint64BE(0xC62C58F9, 0x7DD949BF), Uint64BE(0xCD454F8F, 0x19C5126A), Uint64BE(0xBBE83F4E, 0xCC2BDECB),
    Uint64BE(0xDC842B7E, 0x2819E230), Uint64BE(0xBA89142E, 0x007503B8), Uint64BE(0xA3BC941D, 0x0A5061CB), Uint64BE(0xE9F6760E, 0x32CD8021),
    Uint64BE(0x09C7E552, 0xBC76492F), Uint64BE(0x852F5493, 0x4DA55CC9), Uint64BE(0x8107FCCF, 0x064FCF56), Uint64BE(0x098954D5, 0x1FFF6580),
    Uint64BE(0x23B70EDB, 0x1955C4BF), Uint64BE(0xC330DE42, 0x6430F69D), Uint64BE(0x4715ED43, 0xE8A45C0A), Uint64BE(0xA8D7E4DA, 0xB780A08D),
    Uint64BE(0x0572B974, 0xF03CE0BB), Uint64BE(0xB57D2E98, 0x5E1419C7), Uint64BE(0xE8D9ECBE, 0x2CF3D73F), Uint64BE(0x2FE4B171, 0x70E59750),
    Uint64BE(0x11317BA8, 0x7905E790), Uint64BE(0x7FBF21EC, 0x8A1F45EC), Uint64BE(0x1725CABF, 0xCB045B00), Uint64BE(0x964E915C, 0xD5E2B207),
    Uint64BE(0x3E2B8BCB, 0xF016D66D), Uint64BE(0xBE7444E3, 0x9328A0AC), Uint64BE(0xF85B2B4F, 0xBCDE44B7), Uint64BE(0x49353FEA, 0x39BA63B1),
    Uint64BE(0x1DD01AAF, 0xCD53486A), Uint64BE(0x1FCA8A92, 0xFD719F85), Uint64BE(0xFC7C95D8, 0x27357AFA), Uint64BE(0x18A6A990, 0xC8B35EBD),
    Uint64BE(0xCCCB7005, 0xC6B9C28D), Uint64BE(0x3BDBB92C, 0x43B17F26), Uint64BE(0xAA70B5B4, 0xF89695A2), Uint64BE(0xE94C39A5, 0x4A98307F),
    Uint64BE(0xB7A0B174, 0xCFF6F36E), Uint64BE(0xD4DBA847, 0x29AF48AD), Uint64BE(0x2E18BC1A, 0xD9704A68), Uint64BE(0x2DE0966D, 0xAF2F8B1C),
    Uint64BE(0xB9C11D5B, 0x1E43A07E), Uint64BE(0x64972D68, 0xDEE33360), Uint64BE(0x94628D38, 0xD0C20584), Uint64BE(0xDBC0D2B6, 0xAB90A559),
    Uint64BE(0xD2733C43, 0x35C6A72F), Uint64BE(0x7E75D99D, 0x94A70F4D), Uint64BE(0x6CED1983, 0x376FA72B), Uint64BE(0x97FCAACB, 0xF030BC24),
    Uint64BE(0x7B77497B, 0x32503B12), Uint64BE(0x8547EDDF, 0xB81CCB94), Uint64BE(0x79999CDF, 0xF70902CB), Uint64BE(0xCFFE1939, 0x438E9B24),
    Uint64BE(0x829626E3, 0x892D95D7), Uint64BE(0x92FAE242, 0x91F2B3F1), Uint64BE(0x63E22C14, 0x7B9C3403), Uint64BE(0xC678B6D8, 0x60284A1C),
    Uint64BE(0x58738888, 0x50659AE7), Uint64BE(0x0981DCD2, 0x96A8736D), Uint64BE(0x9F65789A, 0x6509A440), Uint64BE(0x9FF38FED, 0x72E9052F),
    Uint64BE(0xE479EE5B, 0x9930578C), Uint64BE(0xE7F28ECD, 0x2D49EECD), Uint64BE(0x56C074A5, 0x81EA17FE), Uint64BE(0x5544F7D7, 0x74B14AEF),
    Uint64BE(0x7B3F0195, 0xFC6F290F), Uint64BE(0x12153635, 0xB2C0CF57), Uint64BE(0x7F5126DB, 0xBA5E0CA7), Uint64BE(0x7A76956C, 0x3EAFB413),
    Uint64BE(0x3D5774A1, 0x1D31AB39), Uint64BE(0x8A1B0838, 0x21F40CB4), Uint64BE(0x7B4A38E3, 0x2537DF62), Uint64BE(0x95011364, 0x6D1D6E03),
    Uint64BE(0x4DA8979A, 0x0041E8A9), Uint64BE(0x3BC36E07, 0x8F7515D7), Uint64BE(0x5D0A12F2, 0x7AD310D1), Uint64BE(0x7F9D1A2E, 0x1EBE1327),
    Uint64BE(0xDA3A361B, 0x1C5157B1), Uint64BE(0xDCDD7D20, 0x903D0C25), Uint64BE(0x36833336, 0xD068F707), Uint64BE(0xCE68341F, 0x79893389),
    Uint64BE(0xAB909016, 0x8DD05F34), Uint64BE(0x43954B32, 0x52DC25E5), Uint64BE(0xB438C2B6, 0x7F98E5E9), Uint64BE(0x10DCD78E, 0x3851A492),
    Uint64BE(0xDBC27AB5, 0x447822BF), Uint64BE(0x9B3CDB65, 0xF82CA382), Uint64BE(0xB67B7896, 0x167B4C84), Uint64BE(0xBFCED1B0, 0x048EAC50),
    Uint64BE(0xA9119B60, 0x369FFEBD), Uint64BE(0x1FFF7AC8, 0x0904BF45), Uint64BE(0xAC12FB17, 0x1817EEE7), Uint64BE(0xAF08DA91, 0x77DDA93D),
    Uint64BE(0x1B0CAB93, 0x6E65C744), Uint64BE(0xB559EB1D, 0x04E5E932), Uint64BE(0xC37B45B3, 0xF8D6F2BA), Uint64BE(0xC3A9DC22, 0x8CAAC9E9),
    Uint64BE(0xF3B8B667, 0x5A6507FF), Uint64BE(0x9FC477DE, 0x4ED681DA), Uint64BE(0x67378D8E, 0xCCEF96CB), Uint64BE(0x6DD856D9, 0x4D259236),
    Uint64BE(0xA319CE15, 0xB0B4DB31), Uint64BE(0x07397375, 0x1F12DD5E), Uint64BE(0x8A8E849E, 0xB32781A5), Uint64BE(0xE1925C71, 0x285279F5),
    Uint64BE(0x74C04BF1, 0x790C0EFE), Uint64BE(0x4DDA4815, 0x3C94938A), Uint64BE(0x9D266D6A, 0x1CC0542C), Uint64BE(0x7440FB81, 0x6508C4FE),
    Uint64BE(0x13328503, 0xDF48229F), Uint64BE(0xD6BF7BAE, 0xE43CAC40), Uint64BE(0x4838D65F, 0x6EF6748F), Uint64BE(0x1E152328, 0xF3318DEA),
    Uint64BE(0x8F8419A3, 0x48F296BF), Uint64BE(0x72C8834A, 0x5957B511), Uint64BE(0xD7A023A7, 0x3260B45C), Uint64BE(0x94EBC8AB, 0xCFB56DAE),
    Uint64BE(0x9FC10D0F, 0x989993E0), Uint64BE(0xDE68A235, 0x5B93CAE6), Uint64BE(0xA44CFE79, 0xAE538BBE), Uint64BE(0x9D1D84FC, 0xCE371425),
    Uint64BE(0x51D2B1AB, 0x2DDFB636), Uint64BE(0x2FD7E4B9, 0xE72CD38C), Uint64BE(0x65CA5B96, 0xB7552210), Uint64BE(0xDD69A0D8, 0xAB3B546D),
    Uint64BE(0x604D51B2, 0x5FBF70E2), Uint64BE(0x73AA8A56, 0x4FB7AC9E), Uint64BE(0x1A8C1E99, 0x2B941148), Uint64BE(0xAAC40A27, 0x03D9BEA0),
    Uint64BE(0x764DBEAE, 0x7FA4F3A6), Uint64BE(0x1E99B96E, 0x70A9BE8B), Uint64BE(0x2C5E9DEB, 0x57EF4743), Uint64BE(0x3A938FEE, 0x32D29981),
    Uint64BE(0x26E6DB8F, 0xFDF5ADFE), Uint64BE(0x469356C5, 0x04EC9F9D), Uint64BE(0xC8763C5B, 0x08D1908C), Uint64BE(0x3F6C6AF8, 0x59D80055),
    Uint64BE(0x7F7CC394, 0x20A3A545), Uint64BE(0x9BFB227E, 0xBDF4C5CE), Uint64BE(0x89039D79, 0xD6FC5C5C), Uint64BE(0x8FE88B57, 0x305E2AB6),
    Uint64BE(0xA09E8C8C, 0x35AB96DE), Uint64BE(0xFA7E3939, 0x83325753), Uint64BE(0xD6B6D0EC, 0xC617C699), Uint64BE(0xDFEA21EA, 0x9E7557E3),
    Uint64BE(0xB67C1FA4, 0x81680AF8), Uint64BE(0xCA1E3785, 0xA9E724E5), Uint64BE(0x1CFC8BED, 0x0D681639), Uint64BE(0xD18D8549, 0xD140CAEA),
    Uint64BE(0x4ED0FE7E, 0x9DC91335), Uint64BE(0xE4DBF063, 0x4473F5D2), Uint64BE(0x1761F93A, 0x44D5AEFE), Uint64BE(0x53898E4C, 0x3910DA55),
    Uint64BE(0x734DE818, 0x1F6EC39A), Uint64BE(0x2680B122, 0xBAA28D97), Uint64BE(0x298AF231, 0xC85BAFAB), Uint64BE(0x7983EED3, 0x740847D5),
    Uint64BE(0x66C1A2A1, 0xA60CD889), Uint64BE(0x9E17E496, 0x42A3E4C1), Uint64BE(0xEDB454E7, 0xBADC0805), Uint64BE(0x50B704CA, 0xB602C329),
    Uint64BE(0x4CC317FB, 0x9CDDD023), Uint64BE(0x66B4835D, 0x9EAFEA22), Uint64BE(0x219B97E2, 0x6FFC81BD), Uint64BE(0x261E4E4C, 0x0A333A9D),
    Uint64BE(0x1FE2CCA7, 0x6517DB90), Uint64BE(0xD7504DFA, 0x8816EDBB), Uint64BE(0xB9571FA0, 0x4DC089C8), Uint64BE(0x1DDC0325, 0x259B27DE),
    Uint64BE(0xCF3F4688, 0x801EB9AA), Uint64BE(0xF4F5D05C, 0x10CAB243), Uint64BE(0x38B6525C, 0x21A42B0E), Uint64BE(0x36F60E2B, 0xA4FA6800),
    Uint64BE(0xEB359380, 0x3173E0CE), Uint64BE(0x9C4CD625, 0x7C5A3603), Uint64BE(0xAF0C317D, 0x32ADAA8A), Uint64BE(0x258E5A80, 0xC7204C4B),
    Uint64BE(0x8B889D62, 0x4D44885D), Uint64BE(0xF4D14597, 0xE660F855), Uint64BE(0xD4347F66, 0xEC8941C3), Uint64BE(0xE699ED85, 0xB0DFB40D),
    Uint64BE(0x2472F620, 0x7C2D0484), Uint64BE(0xC2A1E7B5, 0xB459AEB5), Uint64BE(0xAB4F6451, 0xCC1D45EC), Uint64BE(0x63767572, 0xAE3D6174),
    Uint64BE(0xA59E0BD1, 0x01731A28), Uint64BE(0x116D0016, 0xCB948F09), Uint64BE(0x2CF9C8CA, 0x052F6E9F), Uint64BE(0x0B090A75, 0x60A968E3),
    Uint64BE(0xABEEDDB2, 0xDDE06FF1), Uint64BE(0x58EFC10B, 0x06A2068D), Uint64BE(0xC6E57A78, 0xFBD986E0), Uint64BE(0x2EAB8CA6, 0x3CE802D7),
    Uint64BE(0x14A19564, 0x0116F336), Uint64BE(0x7C0828DD, 0x624EC390), Uint64BE(0xD74BBE77, 0xE6116AC7), Uint64BE(0x804456AF, 0x10F5FB53),
    Uint64BE(0xEBE9EA2A, 0xDF4321C7), Uint64BE(0x03219A39, 0xEE587A30), Uint64BE(0x49787FEF, 0x17AF9924), Uint64BE(0xA1E9300C, 0xD8520548),
    Uint64BE(0x5B45E522, 0xE4B1B4EF), Uint64BE(0xB49C3B39, 0x95091A36), Uint64BE(0xD4490AD5, 0x26F14431), Uint64BE(0x12A8F216, 0xAF9418C2),
    Uint64BE(0x001F837C, 0xC7350524), Uint64BE(0x1877B51E, 0x57A764D5), Uint64BE(0xA2853B80, 0xF17F58EE), Uint64BE(0x993E1DE7, 0x2D36D310),
    Uint64BE(0xB3598080, 0xCE64A656), Uint64BE(0x252F59CF, 0x0D9F04BB), Uint64BE(0xD23C8E17, 0x6D113600), Uint64BE(0x1BDA0492, 0xE7E4586E),
    Uint64BE(0x21E0BD50, 0x26C619BF), Uint64BE(0x3B097ADA, 0xF088F94E), Uint64BE(0x8D14DEDB, 0x30BE846E), Uint64BE(0xF95CFFA2, 0x3AF5F6F4),
    Uint64BE(0x38717007, 0x61B3F743), Uint64BE(0xCA672B91, 0xE9E4FA16), Uint64BE(0x64C8E531, 0xBFF53B55), Uint64BE(0x241260ED, 0x4AD1E87D),
    Uint64BE(0x106C09B9, 0x72D2E822), Uint64BE(0x7FBA1954, 0x10E5CA30), Uint64BE(0x7884D9BC, 0x6CB569D8), Uint64BE(0x0647DFED, 0xCD894A29),
    Uint64BE(0x63573FF0, 0x3E224774), Uint64BE(0x4FC8E956, 0x0F91B123), Uint64BE(0x1DB956E4, 0x50275779), Uint64BE(0xB8D91274, 0xB9E9D4FB),
    Uint64BE(0xA2EBEE47, 0xE2FBFCE1), Uint64BE(0xD9F1F30C, 0xCD97FB09), Uint64BE(0xEFED53D7, 0x5FD64E6B), Uint64BE(0x2E6D02C3, 0x6017F67F),
    Uint64BE(0xA9AA4D20, 0xDB084E9B), Uint64BE(0xB64BE8D8, 0xB25396C1), Uint64BE(0x70CB6AF7, 0xC2D5BCF0), Uint64BE(0x98F076A4, 0xF7A2322E),
    Uint64BE(0xBF844708, 0x05E69B5F), Uint64BE(0x94C3251F, 0x06F90CF3), Uint64BE(0x3E003E61, 0x6A6591E9), Uint64BE(0xB925A6CD, 0x0421AFF3),
    Uint64BE(0x61BDD130, 0x7C66E300), Uint64BE(0xBF8D5108, 0xE27E0D48), Uint64BE(0x240AB57A, 0x8B888B20), Uint64BE(0xFC87614B, 0xAF287E07),
    Uint64BE(0xEF02CDD0, 0x6FFDB432), Uint64BE(0xA1082C04, 0x66DF6C0A), Uint64BE(0x8215E577, 0x001332C8), Uint64BE(0xD39BB9C3, 0xA48DB6CF),
    Uint64BE(0x27382596, 0x34305C14), Uint64BE(0x61CF4F94, 0xC97DF93D), Uint64BE(0x1B6BACA2, 0xAE4E125B), Uint64BE(0x758F450C, 0x88572E0B),
    Uint64BE(0x959F587D, 0x507A8359), Uint64BE(0xB063E962, 0xE045F54D), Uint64BE(0x60E8ED72, 0xC0DFF5D1), Uint64BE(0x7B649785, 0x55326F9F),
    Uint64BE(0xFD080D23, 0x6DA814BA), Uint64BE(0x8C90FD9B, 0x083F4558), Uint64BE(0x106F72FE, 0x81E2C590), Uint64BE(0x7976033A, 0x39F7D952),
    Uint64BE(0xA4EC0132, 0x764CA04B), Uint64BE(0x733EA705, 0xFAE4FA77), Uint64BE(0xB4D8F77B, 0xC3E56167), Uint64BE(0x9E21F4F9, 0x03B33FD9),
    Uint64BE(0x9D765E41, 0x9FB69F6D), Uint64BE(0xD30C088B, 0xA61EA5EF), Uint64BE(0x5D94337F, 0xBFAF7F5B), Uint64BE(0x1A4E4822, 0xEB4D7A59),
    Uint64BE(0x6FFE73E8, 0x1B637FB3), Uint64BE(0xDDF957BC, 0x36D8B9CA), Uint64BE(0x64D0E29E, 0xEA8838B3), Uint64BE(0x08DD9BDF, 0xD96B9F63),
    Uint64BE(0x087E79E5, 0xA57D1D13), Uint64BE(0xE328E230, 0xE3E2B3FB), Uint64BE(0x1C2559E3, 0x0F0946BE), Uint64BE(0x720BF5F2, 0x6F4D2EAA),
    Uint64BE(0xB0774D26, 0x1CC609DB), Uint64BE(0x443F64EC, 0x5A371195), Uint64BE(0x4112CF68, 0x649A260E), Uint64BE(0xD813F2FA, 0xB7F5C5CA),
    Uint64BE(0x660D3257, 0x380841EE), Uint64BE(0x59AC2C78, 0x73F910A3), Uint64BE(0xE8469638, 0x77671A17), Uint64BE(0x93B633AB, 0xFA3469F8),
    Uint64BE(0xC0C0F5A6, 0x0EF4CDCF), Uint64BE(0xCAF21ECD, 0x4377B28C), Uint64BE(0x57277707, 0x199B8175), Uint64BE(0x506C11B9, 0xD90E8B1D),
    Uint64BE(0xD83CC268, 0x7A19255F), Uint64BE(0x4A29C646, 0x5A314CD1), Uint64BE(0xED2DF212, 0x16235097), Uint64BE(0xB5635C95, 0xFF7296E2),
    Uint64BE(0x22AF003A, 0xB672E811), Uint64BE(0x52E76259, 0x6BF68235), Uint64BE(0x9AEBA33A, 0xC6ECC6B0), Uint64BE(0x944F6DE0, 0x9134DFB6),
    Uint64BE(0x6C47BEC8, 0x83A7DE39), Uint64BE(0x6AD047C4, 0x30A12104), Uint64BE(0xA5B1CFDB, 0xA0AB4067), Uint64BE(0x7C45D833, 0xAFF07862),
    Uint64BE(0x5092EF95, 0x0A16DA0B), Uint64BE(0x9338E69C, 0x052B8E7B), Uint64BE(0x455A4B4C, 0xFE30E3F5), Uint64BE(0x6B02E631, 0x95AD0CF8),
    Uint64BE(0x6B17B224, 0xBAD6BF27), Uint64BE(0xD1E0CCD2, 0x5BB9C169), Uint64BE(0xDE0C89A5, 0x56B9AE70), Uint64BE(0x50065E53, 0x5A213CF6),
    Uint64BE(0x9C1169FA, 0x2777B874), Uint64BE(0x78EDEFD6, 0x94AF1EED), Uint64BE(0x6DC93D95, 0x26A50E68), Uint64BE(0xEE97F453, 0xF06791ED),
    Uint64BE(0x32AB0EDB, 0x696703D3), Uint64BE(0x3A6853C7, 0xE70757A7), Uint64BE(0x31865CED, 0x6120F37D), Uint64BE(0x67FEF95D, 0x92607890),
    Uint64BE(0x1F2B1D1F, 0x15F6DC9C), Uint64BE(0xB69E38A8, 0x965C6B65), Uint64BE(0xAA9119FF, 0x184CCCF4), Uint64BE(0xF43C7328, 0x73F24C13),
    Uint64BE(0xFB4A3D79, 0x4A9A80D2), Uint64BE(0x3550C232, 0x1FD6109C), Uint64BE(0x371F77E7, 0x6BB8417E), Uint64BE(0x6BFA9AAE, 0x5EC05779),
    Uint64BE(0xCD04F3FF, 0x001A4778), Uint64BE(0xE3273522, 0x064480CA), Uint64BE(0x9F91508B, 0xFFCFC14A), Uint64BE(0x049A7F41, 0x061A9E60),
    Uint64BE(0xFCB6BE43, 0xA9F2FE9B), Uint64BE(0x08DE8A1C, 0x7797DA9B), Uint64BE(0x8F9887E6, 0x078735A1), Uint64BE(0xB5B4071D, 0xBFC73A66),
    Uint64BE(0x230E343D, 0xFBA08D33), Uint64BE(0x43ED7F5A, 0x0FAE657D), Uint64BE(0x3A88A0FB, 0xBCB05C63), Uint64BE(0x21874B8B, 0x4D2DBC4F),
    Uint64BE(0x1BDEA12E, 0x35F6A8C9), Uint64BE(0x53C065C6, 0xC8E63528), Uint64BE(0xE34A1D25, 0x0E7A8D6B), Uint64BE(0xD6B04D3B, 0x7651DD7E),
    Uint64BE(0x5E90277E, 0x7CB39E2D), Uint64BE(0x2C046F22, 0x062DC67D), Uint64BE(0xB10BB459, 0x132D0A26), Uint64BE(0x3FA9DDFB, 0x67E2F199),
    Uint64BE(0x0E09B88E, 0x1914F7AF), Uint64BE(0x10E8B35A, 0xF3EEAB37), Uint64BE(0x9EEDECA8, 0xE272B933), Uint64BE(0xD4C718BC, 0x4AE8AE5F),
    Uint64BE(0x81536D60, 0x1170FC20), Uint64BE(0x91B534F8, 0x85818A06), Uint64BE(0xEC8177F8, 0x3F900978), Uint64BE(0x190E714F, 0xADA5156E),
    Uint64BE(0xB592BF39, 0xB0364963), Uint64BE(0x89C350C8, 0x93AE7DC1), Uint64BE(0xAC042E70, 0xF8B383F2), Uint64BE(0xB49B52E5, 0x87A1EE60),
    Uint64BE(0xFB152FE3, 0xFF26DA89), Uint64BE(0x3E666E6F, 0x69AE2C15), Uint64BE(0x3B544EBE, 0x544C19F9), Uint64BE(0xE805A1E2, 0x90CF2456),
    Uint64BE(0x24B33C9D, 0x7ED25117), Uint64BE(0xE7473342, 0x7B72F0C1), Uint64BE(0x0A804D18, 0xB7097475), Uint64BE(0x57E3306D, 0x881EDB4F),
    Uint64BE(0x4AE7D6A3, 0x6EB5DBCB), Uint64BE(0x2D8D5432, 0x157064C8), Uint64BE(0xD1E649DE, 0x1E7F268B), Uint64BE(0x8A328A1C, 0xEDFE552C),
    Uint64BE(0x07A3AEC7, 0x9624C7DA), Uint64BE(0x84547DDC, 0x3E203C94), Uint64BE(0x990A98FD, 0x5071D263), Uint64BE(0x1A4FF126, 0x16EEFC89),
    Uint64BE(0xF6F7FD14, 0x31714200), Uint64BE(0x30C05B1B, 0xA332F41C), Uint64BE(0x8D2636B8, 0x1555A786), Uint64BE(0x46C9FEB5, 0x5D120902),
    Uint64BE(0xCCEC0A73, 0xB49C9921), Uint64BE(0x4E9D2827, 0x355FC492), Uint64BE(0x19EBB029, 0x435DCB0F), Uint64BE(0x4659D2B7, 0x43848A2C),
    Uint64BE(0x963EF2C9, 0x6B33BE31), Uint64BE(0x74F85198, 0xB05A2E7D), Uint64BE(0x5A0F544D, 0xD2B1FB18), Uint64BE(0x03727073, 0xC2E134B1),
    Uint64BE(0xC7F6AA2D, 0xE59AEA61), Uint64BE(0x352787BA, 0xA0D7C22F), Uint64BE(0x9853EAB6, 0x3B5E0B35), Uint64BE(0xABBDCDD7, 0xED5C0860),
    Uint64BE(0xCF05DAF5, 0xAC8D77B0), Uint64BE(0x49CAD48C, 0xEBF4A71E), Uint64BE(0x7A4C10EC, 0x2158C4A6), Uint64BE(0xD9E92AA2, 0x46BF719E),
    Uint64BE(0x13AE978D, 0x09FE5557), Uint64BE(0x730499AF, 0x921549FF), Uint64BE(0x4E4B705B, 0x92903BA4), Uint64BE(0xFF577222, 0xC14F0A3A),
    Uint64BE(0x55B6344C, 0xF97AAFAE), Uint64BE(0xB862225B, 0x055B6960), Uint64BE(0xCAC09AFB, 0xDDD2CDB4), Uint64BE(0xDAF8E982, 0x9FE96B5F),
    Uint64BE(0xB5FDFC5D, 0x3132C498), Uint64BE(0x310CB380, 0xDB6F7503), Uint64BE(0xE87FBB46, 0x217A360E), Uint64BE(0x2102AE46, 0x6EBB1148),
    Uint64BE(0xF8549E1A, 0x3AA5E00D), Uint64BE(0x07A69AFD, 0xCC42261A), Uint64BE(0xC4C118BF, 0xE78FEAAE), Uint64BE(0xF9F4892E, 0xD96BD438),
    Uint64BE(0x1AF3DBE2, 0x5D8F45DA), Uint64BE(0xF5B4B0B0, 0xD2DEEEB4), Uint64BE(0x962ACEEF, 0xA82E1C84), Uint64BE(0x046E3ECA, 0xAF453CE9),
    Uint64BE(0xF05D1296, 0x81949A4C), Uint64BE(0x964781CE, 0x734B3C84), Uint64BE(0x9C2ED440, 0x81CE5FBD), Uint64BE(0x522E23F3, 0x925E319E),
    Uint64BE(0x177E00F9, 0xFC32F791), Uint64BE(0x2BC60A63, 0xA6F3B3F2), Uint64BE(0x222BBFAE, 0x61725606), Uint64BE(0x486289DD, 0xCC3D6780),
    Uint64BE(0x7DC7785B, 0x8EFDFC80), Uint64BE(0x8AF38731, 0xC02BA980), Uint64BE(0x1FAB64EA, 0x29A2DDF7), Uint64BE(0xE4D94293, 0x22CD065A),
    Uint64BE(0x9DA058C6, 0x7844F20C), Uint64BE(0x24C0E332, 0xB70019B0), Uint64BE(0x233003B5, 0xA6CFE6AD), Uint64BE(0xD586BD01, 0xC5C217F6),
    Uint64BE(0x5E563788, 0x5F29BC2B), Uint64BE(0x7EBA726D, 0x8C94094B), Uint64BE(0x0A56A5F0, 0xBFE39272), Uint64BE(0xD79476A8, 0x4EE20D06),
    Uint64BE(0x9E4C1269, 0xBAA4BF37), Uint64BE(0x17EFEE45, 0xB0DEE640), Uint64BE(0x1D95B0A5, 0xFCF90BC6), Uint64BE(0x93CBE0B6, 0x99C2585D),
    Uint64BE(0x65FA4F22, 0x7A2B6D79), Uint64BE(0xD5F9E858, 0x292504D5), Uint64BE(0xC2B5A03F, 0x71471A6F), Uint64BE(0x59300222, 0xB4561E00),
    Uint64BE(0xCE2F8642, 0xCA0712DC), Uint64BE(0x7CA9723F, 0xBB2E8988), Uint64BE(0x27853383, 0x47F2BA08), Uint64BE(0xC61BB3A1, 0x41E50E8C),
    Uint64BE(0x150F361D, 0xAB9DEC26), Uint64BE(0x9F6A419D, 0x382595F4), Uint64BE(0x64A53DC9, 0x24FE7AC9), Uint64BE(0x142DE49F, 0xFF7A7C3D),
    Uint64BE(0x0C335248, 0x857FA9E7), Uint64BE(0x0A9C32D5, 0xEAE45305), Uint64BE(0xE6C42178, 0xC4BBB92E), Uint64BE(0x71F1CE24, 0x90D20B07),
    Uint64BE(0xF1BCC3D2, 0x75AFE51A), Uint64BE(0xE728E8C8, 0x3C334074), Uint64BE(0x96FBF83A, 0x12884624), Uint64BE(0x81A1549F, 0xD6573DA5),
    Uint64BE(0x5FA7867C, 0xAF35E149), Uint64BE(0x56986E2E, 0xF3ED091B), Uint64BE(0x917F1DD5, 0xF8886C61), Uint64BE(0xD20D8C88, 0xC8FFE65F),
    Uint64BE(0x31D71DCE, 0x64B2C310), Uint64BE(0xF165B587, 0xDF898190), Uint64BE(0xA57E6339, 0xDD2CF3A0), Uint64BE(0x1EF6E6DB, 0xB1961EC9),
    Uint64BE(0x70CC73D9, 0x0BC26E24), Uint64BE(0xE21A6B35, 0xDF0C3AD7), Uint64BE(0x003A93D8, 0xB2806962), Uint64BE(0x1C99DED3, 0x3CB890A1),
    Uint64BE(0xCF3145DE, 0x0ADD4289), Uint64BE(0xD0E4427A, 0x5514FB72), Uint64BE(0x77C621CC, 0x9FB3A483), Uint64BE(0x67A34DAC, 0x4356550B),
    Uint64BE(0xF8D626AA, 0xAF278509),
];
module.exports.Random64 = Random64;
module.exports.RandomPiece = Random64.slice(0,768);
module.exports.RandomCastle = Random64.slice(768, 768+4);
module.exports.RandomEnPassant = Random64.slice(764, 764+4);
module.exports.RandomTurn = Random64.slice(780, 780+1);
module.exports.PromotionPieces = promotionPieces;
module.exports.encode_move = function (algebraic_move) {

}


module.exports.decode_move = function (move) {
  /*
  "move" is a bit field with the following meaning (bit 0 is the least significant bit)
  bits                meaning
  ===================================
  0,1,2               to file
  3,4,5               to row
  6,7,8               from file
  9,10,11             from row
  12,13,14            promotion piece
  */
  let moveStr = [];
  let from = (move >> 6) & parseInt('077',8);
  let fromRow = ((from >> 3) & 0x7 )+ 1;
  let fromFile = from & 0x7;
  let to = move & parseInt('077',8);
  let toRow = ((to >> 3) & 0x7) +1;
  let toFile = to & 0x7;
  let promotion = (move >> 12) & 0x7;
  if (fromFile) {
    moveStr[0] = files[fromFile];
  } else {
    moveStr[0] = 'a';
  }
    moveStr[1] = fromRow || '1';
  if (toFile) {
    moveStr[2] = files[toFile]
  } else {
    moveStr[2] = 'a';
  }
  moveStr[3] = toRow || '1';
  if (promotion) {
      moveStr[4] = promotionPieces[promotion];
  }
  let decoded = moveStr.join("");
//Convert the castling moves to standard notation
  if (decoded == "e1h1") {
    return "e1g1";
  } else if (decoded ==  "e1a1") {
    return "e1c1";
  } else if (decoded ==  "e8h8") {
    return "e8g8";
  } else if (decoded == "e8a8") {
    return "e8c8";

  }

  if (decoded == "a1a1" ) {
      return "";
  }
  return decoded;
}
