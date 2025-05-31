export interface Translations {
  header: {
    title: string;
    currentLang: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    tryTool: string;
    warnings: string;
  };
  blockchain: {
    title: string;
    description: string;
    steps: {
      store: {
        title: string;
        description: string;
      };
      chain: {
        title: string;
        description: string;
      };
      secure: {
        title: string;
        description: string;
      };
    };
  };
  cryptoConnection: {
    title: string;
    description: string;
    dogecoin: {
      title: string;
      description: string;
      algorithm: string;
      algorithmNote: string;
    };
    mining: {
      title: string;
      description: string;
    };
    security: {
      title: string;
      description: string;
    };
  };
  shaTool: {
    title: string;
    description: string;
    inputLabel: string;
    placeholder: string;
    algorithm: string;
    outputLabel: string;
    properties: {
      characters: {
        title: string;
        description: string;
      };
      deterministic: {
        title: string;
        description: string;
      };
      avalanche: {
        title: string;
        description: string;
      };
    };
  };
  warnings: {
    title: string;
    description: string;
    stats: {
      loseMoney: {
        title: string;
        description: string;
      };
      loseHalf: {
        title: string;
        description: string;
      };
      emotional: {
        title: string;
        description: string;
      };
      quit: {
        title: string;
        description: string;
      };
    };
    messages: {
      invest: {
        title: string;
        description: string;
      };
      biases: {
        title: string;
        description: string;
      };
      education: {
        title: string;
        description: string;
      };
    };
  };
  footer: {
    educational: {
      title: string;
      links: {
        cryptography: string;
        distributed: string;
        signatures: string;
      };
    };
    financial: {
      title: string;
      links: {
        risk: string;
        psychology: string;
        analysis: string;
      };
    };
    disclaimer: {
      title: string;
      text: string;
    };
    copyright: string;
  };
}

export const translations: Record<string, Translations> = {
  english: {
    header: {
      title: "Sha Sha Real Smooth",
      currentLang: "English"
    },
    hero: {
      title: "Learn Blockchain",
      subtitle: "Simply & Safely",
      description: "Understand blockchain technology through our interactive SHA256 tool and learn about the real risks of cryptocurrency investing.",
      tryTool: "Try the Tool",
      warnings: "Investment Warnings"
    },
    blockchain: {
      title: "What is Blockchain?",
      description: "Think of blockchain as a digital ledger that everyone can see, but no one can cheat.",
      steps: {
        store: {
          title: "1. Store Data",
          description: "Information is stored in blocks, like pages in a book."
        },
        chain: {
          title: "2. Chain Together",
          description: "Each block connects to the previous one using special math (hashing)."
        },
        secure: {
          title: "3. Stay Secure",
          description: "Once connected, changing old data becomes nearly impossible."
        }
      }
    },
    cryptoConnection: {
      title: "How SHA256 Powers Cryptocurrency",
      description: "Understanding the connection between hashing and digital currencies like Dogecoin.",
      dogecoin: {
        title: "Dogecoin & Scrypt",
        description: "While our tool shows SHA256, Dogecoin actually uses Scrypt algorithm. Both serve the same purpose: creating unique fingerprints for data.",
        algorithm: "Dogecoin Algorithm: Scrypt",
        algorithmNote: "Different from Bitcoin's SHA256, but same concept"
      },
      mining: {
        title: "Mining & Proof of Work",
        description: "Miners compete to find hash values that meet specific criteria. This process secures the network and creates new coins."
      },
      security: {
        title: "Blockchain Security",
        description: "Each block's hash depends on the previous block. Changing any old transaction would require recalculating all subsequent hashes - nearly impossible."
      }
    },
    shaTool: {
      title: "🎵 Sha Sha Real Smooth Tool",
      description: "See how hashing works! Type anything below and watch it transform into a unique SHA256 hash - the building block of blockchain security.",
      inputLabel: "Your Input Data:",
      placeholder: "Type anything here... Try: Hello World!",
      algorithm: "SHA256 Algorithm",
      outputLabel: "SHA256 Hash Output:",
      properties: {
        characters: {
          title: "Always 64 Characters",
          description: "No matter the input size"
        },
        deterministic: {
          title: "Deterministic",
          description: "Same input = Same output"
        },
        avalanche: {
          title: "Avalanche Effect",
          description: "Tiny change = Big difference"
        }
      }
    },
    warnings: {
      title: "⚠️ Investment Reality Check",
      description: "Before you invest in cryptocurrency, understand the real statistics about winners and losers.",
      stats: {
        loseMoney: {
          title: "Lose Money",
          description: "Of day traders lose money over time"
        },
        loseHalf: {
          title: "Lose 50%+",
          description: "Lose more than half their investment"
        },
        emotional: {
          title: "Emotional Trading",
          description: "Make decisions based on fear/greed"
        },
        quit: {
          title: "Quit Trading",
          description: "Stop within first year due to losses"
        }
      },
      messages: {
        invest: {
          title: "Never Invest More Than You Can Afford to Lose",
          description: "Cryptocurrency is highly volatile and speculative. Many people lose their life savings. Only invest money you can completely lose without affecting your basic needs."
        },
        biases: {
          title: "Beware of Cognitive Biases",
          description: "Survivorship bias makes success stories more visible. You hear about the few who got rich, not the many who lost everything. FOMO (Fear of Missing Out) drives poor investment decisions."
        },
        education: {
          title: "Education First, Investment Second",
          description: "Learn about blockchain technology for its educational value. Understanding the technology doesn't mean you should invest. Many tech experts understand blockchain but choose not to invest in cryptocurrencies."
        }
      }
    },
    footer: {
      educational: {
        title: "Educational Resources",
        links: {
          cryptography: "How Cryptography Works",
          distributed: "Distributed Systems",
          signatures: "Digital Signatures"
        }
      },
      financial: {
        title: "Financial Education",
        links: {
          risk: "Risk Management",
          psychology: "Investment Psychology",
          analysis: "Market Analysis"
        }
      },
      disclaimer: {
        title: "Legal Disclaimer",
        text: "This website is for educational purposes only. Not financial advice. Past performance does not guarantee future results. Consult with financial advisors before making investment decisions."
      },
      copyright: "Made for education, not profit."
    }
  },
  korean: {
    header: {
      title: "샤샤 리얼 스무스",
      currentLang: "한국어"
    },
    hero: {
      title: "블록체인 배우기",
      subtitle: "간단하고 안전하게",
      description: "상호작용하는 SHA256 도구를 통해 블록체인 기술을 이해하고 암호화폐 투자의 실제 위험에 대해 알아보세요.",
      tryTool: "도구 사용해보기",
      warnings: "투자 경고사항"
    },
    blockchain: {
      title: "블록체인이란 무엇인가요?",
      description: "블록체인을 모든 사람이 볼 수 있지만 아무도 속일 수 없는 디지털 장부라고 생각해보세요.",
      steps: {
        store: {
          title: "1. 데이터 저장",
          description: "정보가 책의 페이지처럼 블록에 저장됩니다."
        },
        chain: {
          title: "2. 연결하기",
          description: "각 블록은 특별한 수학(해싱)을 사용하여 이전 블록과 연결됩니다."
        },
        secure: {
          title: "3. 보안 유지",
          description: "연결되면 기존 데이터를 변경하는 것이 거의 불가능해집니다."
        }
      }
    },
    cryptoConnection: {
      title: "SHA256이 암호화폐를 어떻게 지원하는가",
      description: "해싱과 도지코인 같은 디지털 화폐 간의 연결을 이해하기.",
      dogecoin: {
        title: "도지코인 & Scrypt",
        description: "우리 도구는 SHA256을 보여주지만, 도지코인은 실제로 Scrypt 알고리즘을 사용합니다. 둘 다 같은 목적을 수행합니다: 데이터의 고유한 지문을 만드는 것입니다.",
        algorithm: "도지코인 알고리즘: Scrypt",
        algorithmNote: "비트코인의 SHA256과 다르지만 같은 개념"
      },
      mining: {
        title: "채굴 & 작업 증명",
        description: "채굴자들은 특정 기준을 만족하는 해시 값을 찾기 위해 경쟁합니다. 이 과정이 네트워크를 보호하고 새로운 코인을 생성합니다."
      },
      security: {
        title: "블록체인 보안",
        description: "각 블록의 해시는 이전 블록에 의존합니다. 기존 거래를 변경하려면 모든 후속 해시를 다시 계산해야 하므로 거의 불가능합니다."
      }
    },
    shaTool: {
      title: "🎵 샤샤 리얼 스무스 도구",
      description: "해싱이 어떻게 작동하는지 확인해보세요! 아래에 무엇이든 입력하고 블록체인 보안의 구성 요소인 고유한 SHA256 해시로 변환되는 것을 지켜보세요.",
      inputLabel: "입력 데이터:",
      placeholder: "여기에 무엇이든 입력하세요... 시도해보세요: Hello World!",
      algorithm: "SHA256 알고리즘",
      outputLabel: "SHA256 해시 출력:",
      properties: {
        characters: {
          title: "항상 64자",
          description: "입력 크기에 관계없이"
        },
        deterministic: {
          title: "결정론적",
          description: "같은 입력 = 같은 출력"
        },
        avalanche: {
          title: "눈사태 효과",
          description: "작은 변화 = 큰 차이"
        }
      }
    },
    warnings: {
      title: "⚠️ 투자 현실 확인",
      description: "암호화폐에 투자하기 전에 승자와 패자에 대한 실제 통계를 이해하세요.",
      stats: {
        loseMoney: {
          title: "돈을 잃음",
          description: "데이 트레이더들이 시간이 지나면서 돈을 잃습니다"
        },
        loseHalf: {
          title: "50%+ 손실",
          description: "투자금의 절반 이상을 잃습니다"
        },
        emotional: {
          title: "감정적 거래",
          description: "두려움/탐욕에 기반한 결정을 내립니다"
        },
        quit: {
          title: "거래 중단",
          description: "손실로 인해 첫 해 안에 중단합니다"
        }
      },
      messages: {
        invest: {
          title: "잃어도 감당할 수 있는 이상으로는 절대 투자하지 마세요",
          description: "암호화폐는 매우 변동성이 크고 투기적입니다. 많은 사람들이 평생 저축을 잃습니다. 기본적인 생활에 영향을 주지 않고 완전히 잃어도 되는 돈만 투자하세요."
        },
        biases: {
          title: "인지 편향을 조심하세요",
          description: "생존자 편향은 성공 사례를 더 잘 보이게 만듭니다. 부자가 된 소수의 이야기는 들리지만 모든 것을 잃은 많은 사람들의 이야기는 들리지 않습니다. FOMO(놓칠 것에 대한 두려움)는 잘못된 투자 결정을 이끕니다."
        },
        education: {
          title: "교육이 먼저, 투자는 나중에",
          description: "블록체인 기술을 교육적 가치로 배우세요. 기술을 이해한다고 해서 투자해야 한다는 뜻은 아닙니다. 많은 기술 전문가들이 블록체인을 이해하지만 암호화폐에 투자하지 않기로 선택합니다."
        }
      }
    },
    footer: {
      educational: {
        title: "교육 자료",
        links: {
          cryptography: "암호학의 작동 원리",
          distributed: "분산 시스템",
          signatures: "디지털 서명"
        }
      },
      financial: {
        title: "금융 교육",
        links: {
          risk: "위험 관리",
          psychology: "투자 심리학",
          analysis: "시장 분석"
        }
      },
      disclaimer: {
        title: "법적 고지사항",
        text: "이 웹사이트는 교육 목적으로만 사용됩니다. 금융 조언이 아닙니다. 과거 성과가 미래 결과를 보장하지 않습니다. 투자 결정을 내리기 전에 금융 고문과 상의하세요."
      },
      copyright: "이익이 아닌 교육을 위해 만들어졌습니다."
    }
  }
};
