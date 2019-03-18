module.exports = {
  accountInfoSuccessResponse: {
    status: 200,

    data: {
      product: {
        productCode: "VW",
        providerId: "001000",
        clientProductCode: "VSG"
      },
      lastBillingDate: "2017-08-07",
      cashLimit: { currency: "USD", value: "96.00" },
      totalDisputes: {
        totalAmount: { currency: "USD", value: "152.55" },
        count: "14"
      },
      identifiers: { accountId: "00000015486", cardLast4: "1234" },
      currentBalance: { currency: "USD", value: "81.00" },
      lastPurchase: {
        date: "2017-08-15",
        amount: { currency: "USD", value: "10.99" }
      },
      type: "Personal",
      paymentDue: {
        outstandingStatementedAmount: { currency: "USD", value: "0.00" },
        outstandingAmount: { currency: "USD", value: "-225.59" },
        statementedAmount: { currency: "USD", value: "44.00" }
      },
      numberCardsOut: "4",
      openedDate: "2016-07-09",
      paymentDueDate: "2017-08-09",
      statementBalance: { currency: "USD", value: "240.66" },
      currencyInformation: { code: "USD", name: "U.S. DOLLAR" },
      meta: {
        lastMaintenanceDate: "2017-08-14",
        interestRate: "12",
        totalCashAdvanceAmount: { currency: "USD", value: "0.00" },
        accountAttributes: [
          { attributeId: "10", description: "SELECTED", value: "S" },
          { attributeId: "15", description: "***************", value: "1" },
          { attributeId: "20", description: "***************", value: "01" },
          {
            attributeId: "60",
            description: "***************",
            value: "TESTIN"
          },
          { attributeId: "65", description: "***************", value: "G" },
          { attributeId: "90", description: "TEST", value: "0" },
          { attributeId: "91", description: "LINE INC AMT", value: "0" },
          { attributeId: "92", description: "TEST001", value: "0" },
          { attributeId: "93", description: "MNTHLY MORTGAGE", value: "0" }
        ],
        totalPurchaseAmount: { currency: "USD", value: "81.00" },
        expirationDate: "2024-01-05",
        status: [
          { reason: "Y", code: "PG", description: "PRODUCT CHANGE" },
          {
            reason: "00",
            code: "RE",
            description: "ALL PYMT REQUIREMENTS MET"
          },
          { reason: "CU", code: "DI", description: "CURRENTLY IN DISPUTE" },
          { reason: "Y", code: "AC", description: "ADDRESS CHANGE THIS CYCLE" },
          { reason: "Y", code: "AV", description: "ACTIVE THIS CYCLE" },
          { reason: "PU", code: "FU", description: "FIRST USE WAS PURCHASE" },
          { reason: "Y", code: "MA", description: "ACTIVE THIS MONTH" },
          { reason: "Y", code: "YA", description: "ACTIVE THIS YEAR" },
          { reason: "Y", code: "LA", description: "ACTIVE LAST YEAR" },
          { reason: "Y", code: "OA", description: "ACTIVE SINCE OPENED" },
          { reason: "Y", code: "PY", description: "PAYMENT ACTIVTY THIS CYC" },
          { reason: "Y", code: "PU", description: "PURCH ACTIVITY THIS CYCLE" },
          { reason: "P", code: "TA", description: "PERSONAL1 TEST" }
        ]
      },
      lateCharges: { currency: "USD", value: "28.18" },
      purchasesSinceLastCycle: { currency: "USD", value: "81.00" },
      billingDay: "7",
      previousStatementDate: "2017-08-07",
      creditLimit: { currency: "USD", value: "1920.00" },
      multiAccount: "true",
      lastPayment: {
        date: "2017-08-16",
        amount: { currency: "USD", value: "269.27" }
      },
      featureToggles: {
        alerts: "false",
        autoPay: "true",
        overdraftProtection: "true"
      },
      outstandingDisputes: {
        totalAmount: { currency: "USD", value: "152.55" },
        count: "14"
      }
    }
  }
};
