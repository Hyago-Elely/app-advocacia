"use client"

import { Calendar, Users, FileText, Bell, CheckCircle, ArrowRight, Clock, Shield, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const plans = [
    {
      name: "Básico",
      price: "29,90",
      description: "Ideal para advogados autônomos",
      features: [
        "Agenda online com notificações",
        "Cadastro de até 50 clientes",
        "Controle de prazos básico",
        "Suporte por email"
      ],
      highlighted: false
    },
    {
      name: "Pro",
      price: "49,90",
      description: "Para escritórios em crescimento",
      features: [
        "Tudo do plano Básico",
        "Cadastro ilimitado de clientes",
        "Atualização processual automática",
        "Gráficos de métricas comparativas",
        "Notificações por WhatsApp",
        "Suporte prioritário"
      ],
      highlighted: true
    },
    {
      name: "Super",
      price: "79,90",
      description: "Solução completa para escritórios",
      features: [
        "Tudo do plano Pro",
        "Controle financeiro do escritório",
        "Relatórios personalizados",
        "Integração com tribunais",
        "API para integrações",
        "Suporte 24/7 dedicado",
        "Treinamento personalizado"
      ],
      highlighted: false
    }
  ]

  const features = [
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      description: "Nunca mais perca um prazo. Notificações automáticas para reuniões e prazos processuais."
    },
    {
      icon: Users,
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de casos, documentos e comunicações centralizadas."
    },
    {
      icon: FileText,
      title: "Atualização Processual",
      description: "Acompanhamento automático de processos com alertas de movimentações importantes."
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Receba alertas por email, WhatsApp e notificações push sobre prazos críticos."
    },
    {
      icon: Clock,
      title: "Controle de Prazos",
      description: "Sistema automatizado que calcula prazos processuais e envia lembretes antecipados."
    },
    {
      icon: Shield,
      title: "Segurança Jurídica",
      description: "Dados criptografados e backup automático. Conformidade total com LGPD."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-amber-600/10" />
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Substitua sua secretária por tecnologia
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              O Sistema Completo para
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                Advogados Modernos
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Gerencie seu escritório com eficiência profissional. Agenda inteligente, controle de prazos, 
              gestão de clientes e métricas de produtividade em uma única plataforma.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                Começar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-2">
                Ver Demonstração
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Sem contrato de fidelidade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Tudo que você precisa para gerenciar seu escritório
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Funcionalidades desenvolvidas especialmente para advogados que buscam produtividade e organização
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Métricas que Impulsionam Resultados
              </h2>
              <p className="text-lg text-blue-100">
                Acompanhe a produtividade do seu escritório com gráficos comparativos mensais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="text-3xl font-bold mb-2">+47%</div>
                <div className="text-blue-100">Aumento de produtividade</div>
                <div className="text-sm text-blue-200 mt-2">vs. mês anterior</div>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Prazos cumpridos</div>
                <div className="text-sm text-blue-200 mt-2">Zero atrasos</div>
              </Card>
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <div className="text-3xl font-bold mb-2">-68%</div>
                <div className="text-blue-100">Redução de tarefas manuais</div>
                <div className="text-sm text-blue-200 mt-2">Mais tempo para casos</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Planos que Cabem no seu Bolso
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Escolha o plano ideal para o tamanho do seu escritório. Upgrade ou downgrade a qualquer momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`p-8 relative ${
                  plan.highlighted 
                    ? 'border-4 border-blue-600 shadow-2xl scale-105 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950' 
                    : 'border-2 hover:border-blue-300 dark:hover:border-blue-700'
                } transition-all duration-300`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold rounded-full">
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-slate-600 dark:text-slate-400 text-lg">R$</span>
                    <span className="text-5xl font-bold text-slate-900 dark:text-slate-100">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">/mês</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg'
                      : 'bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900'
                  }`}
                  size="lg"
                >
                  Começar Agora
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-400">
              Todos os planos incluem 14 dias de teste grátis • Sem cartão de crédito necessário
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto para Transformar seu Escritório?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Junte-se a centenas de advogados que já automatizaram sua gestão e aumentaram sua produtividade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg shadow-xl">
                Começar Teste Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-600 dark:text-slate-400 text-sm">
            <p>© 2024 Sistema Jurídico Pro. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido exclusivamente para advogados brasileiros</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
