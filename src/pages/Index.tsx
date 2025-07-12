import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    material: "",
    size: "",
    heating: "",
    installation: false,
    delivery: "",
    contact: { name: "", phone: "", email: "" },
  });

  const advantages = [
    {
      icon: "Thermometer",
      title: "Быстрый нагрев",
      description: "Металлические чаны нагреваются в 3 раза быстрее деревянных",
    },
    {
      icon: "Shield",
      title: "Долговечность",
      description: "Срок службы более 15 лет без потери качества",
    },
    {
      icon: "Droplets",
      title: "Легкий уход",
      description: "Простая очистка и обслуживание без специальных средств",
    },
    {
      icon: "Snowflake",
      title: "Всесезонность",
      description: "Подходят для использования круглый год",
    },
  ];

  const products = [
    {
      id: 1,
      name: 'Чан "Классик"',
      size: "1.5м диаметр",
      capacity: "4-6 человек",
      price: "от 85 000 ₽",
      image: "/img/5b437f2c-c544-485b-ae72-55c50dae5945.jpg",
      features: ["Нержавеющая сталь", "Внешняя топка", "Теплоизоляция"],
    },
    {
      id: 2,
      name: 'Чан "Премиум"',
      size: "1.8м диаметр",
      capacity: "6-8 человек",
      price: "от 120 000 ₽",
      image: "/img/306426d7-acc0-47f5-9bb1-07a250b8e96d.jpg",
      features: ["Утепленные стенки", "LED подсветка", "Автоматика"],
    },
    {
      id: 3,
      name: 'Чан "Люкс"',
      size: "2.2м диаметр",
      capacity: "8-12 человек",
      price: "от 180 000 ₽",
      image: "/img/73791b97-66fd-49c7-899b-3c9beffb517b.jpg",
      features: ["Система фильтрации", "Гидромассаж", "Терморегулятор"],
    },
  ];

  const gallery = [
    "/img/5b437f2c-c544-485b-ae72-55c50dae5945.jpg",
    "/img/306426d7-acc0-47f5-9bb1-07a250b8e96d.jpg",
    "/img/73791b97-66fd-49c7-899b-3c9beffb517b.jpg",
  ];

  const handleQuizNext = () => {
    if (quizStep < 4) {
      setQuizStep(quizStep + 1);
    } else {
      // Здесь можно добавить отправку данных
      alert("Спасибо! Мы свяжемся с вами в ближайшее время");
      setShowQuiz(false);
      setQuizStep(1);
    }
  };

  const renderQuizStep = () => {
    switch (quizStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Выберите размер чана</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["1.5м (4-6 чел.)", "1.8м (6-8 чел.)", "2.2м (8-12 чел.)"].map(
                (size) => (
                  <Button
                    key={size}
                    variant={quizData.size === size ? "default" : "outline"}
                    onClick={() => setQuizData({ ...quizData, size })}
                    className="h-auto p-4 text-center"
                  >
                    {size}
                  </Button>
                ),
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Тип нагрева</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Дровяная топка", "Электрический нагрев"].map((heating) => (
                <Button
                  key={heating}
                  variant={quizData.heating === heating ? "default" : "outline"}
                  onClick={() => setQuizData({ ...quizData, heating })}
                  className="h-auto p-4"
                >
                  {heating}
                </Button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Дополнительные услуги</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={quizData.installation}
                  onChange={(e) =>
                    setQuizData({ ...quizData, installation: e.target.checked })
                  }
                />
                <span>Установка под ключ (+25 000 ₽)</span>
              </label>
              <Select
                onValueChange={(value) =>
                  setQuizData({ ...quizData, delivery: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Выберите регион доставки" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moscow">Москва и область</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
                  <SelectItem value="regions">Другие регионы</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контактные данные</h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input
                  id="name"
                  value={quizData.contact.name}
                  onChange={(e) =>
                    setQuizData({
                      ...quizData,
                      contact: { ...quizData.contact, name: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  value={quizData.contact.phone}
                  onChange={(e) =>
                    setQuizData({
                      ...quizData,
                      contact: { ...quizData.contact, phone: e.target.value },
                    })
                  }
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={quizData.contact.email}
                  onChange={(e) =>
                    setQuizData({
                      ...quizData,
                      contact: { ...quizData.contact, email: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2C3E50] to-[#3498DB] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Банные чаны
            <span className="block text-[#3498DB]">премиум-класса</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Металлические чаны для дачи и бани. Доставка по всей России.
            Установка под ключ. Гарантия 5 лет.
          </p>
          <Button
            size="lg"
            className="bg-[#3498DB] hover:bg-[#2980B9] text-white px-8 py-4 text-lg animate-scale-in"
            onClick={() => setShowQuiz(true)}
          >
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать стоимость
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">
            Преимущества наших банных чанов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center border-none shadow-lg hover-scale"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={advantage.icon}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="text-xl text-[#2C3E50]">
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">
            Каталог банных чанов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden shadow-lg hover-scale"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-[#2C3E50]">
                      {product.name}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className="bg-[#3498DB] text-white"
                    >
                      {product.capacity}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {product.size}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="space-y-1 text-sm text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Icon
                            name="Check"
                            size={16}
                            className="text-green-500 mr-2"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#2C3E50]">
                        {product.price}
                      </span>
                      <Button
                        className="bg-[#3498DB] hover:bg-[#2980B9]"
                        onClick={() => setShowQuiz(true)}
                      >
                        Заказать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2C3E50]">
            Фото галерея
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg hover-scale"
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-lg animate-scale-in">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                Расчет стоимости (шаг {quizStep}/4)
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuiz(false)}
                >
                  <Icon name="X" size={20} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {renderQuizStep()}
              <div className="flex justify-between pt-4">
                {quizStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setQuizStep(quizStep - 1)}
                  >
                    Назад
                  </Button>
                )}
                <Button
                  className="ml-auto bg-[#3498DB] hover:bg-[#2980B9]"
                  onClick={handleQuizNext}
                >
                  {quizStep === 4 ? "Отправить заявку" : "Далее"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contacts Section */}
      <section className="py-16 px-4 bg-[#2C3E50] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto">
                <Icon name="Phone" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="text-lg">+7 (999) 123-45-67</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto">
                <Icon name="Mail" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-lg">info@bannye-chany.ru</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto">
                <Icon name="MapPin" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">Доставка</h3>
              <p className="text-lg">По всей России</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#2C3E50]"
              onClick={() => setShowQuiz(true)}
            >
              <Icon name="Calculator" className="mr-2" size={20} />
              Получить расчет стоимости
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
