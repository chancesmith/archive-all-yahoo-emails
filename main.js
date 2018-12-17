function archiveAvailEmails() {
  document
    .querySelector(
      "#mail-app-component > div.W_6D6F.D_F > div > div.en_0 > div > div:nth-child(1) > div > div > ul > li:nth-child(1) > span > button"
    )
    .click();
  setTimeout(function() {
    document
      .querySelector(
        "#mail-app-component > div.W_6D6F.D_F > div > div.en_0 > div > div.D_F.em_N.gl_C > ul > li:nth-child(1) > div > button"
      )
      .click();
  }, 700);
}

setInterval(function() {
  if (
    document.querySelector(
      "#mail-app-component > div.W_6D6F.D_F > div > div.D_F.H_6D6F.ab_FT.em_N.M_0.p_R > div > div.W_6D6F.H_6D6F > div > div.p_R.iy_h.iz_A.H_6D6F.W_6D6F.X_6Fd5.N_6Fd5.k_w > div.hd_n.P_0.M_0.p_R > ul:nth-child(1) > li:nth-child(3)"
    )
  ) {
    archiveAvailEmails();
  }
}, 6000);
