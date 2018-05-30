class ListElement {
    ListElement next;    // указательнаследующийэлемент
    int data;            // данные
}

classList {
    private ListElement head;       // указательнапервыйэлемент
    private ListElement tail;       // указательпоследнийэлемент
 
    void addFront(int data)           //добавитьспереди
    {
        ListElement a = new ListElement();  //создаёмновыйэлемент
        a.data = data;              //инициализируем данные. 
                                    // указатель на следующий элемент автоматически инициализируется как null
        if(head == null)            //если список пуст
        {                           //то указываем ссылки начала и конца на новый элемент
            head = a;               //т.е. список теперь состоит из одного элемента
            tail = a;
        }
        else {
            a.next = head;          //иначе новый элемент теперь ссылается на "бывший" первый
            head = a;               //а указатель на первый элемент теперь ссылается на новый элемент 
        }
    }
 
    void addBack(int data) {          //добавление в конец списка
        ListElement a = new ListElement();  //создаёмновыйэлемент
        a.data = data;
        if (tail == null)           //если список пуст
        {                           //то указываем ссылки начала и конца на новый элемент
            head = a;               //т.е. список теперь состоит из одного элемента
            tail = a;
        } else {
            tail.next = a;          //иначе "старый" последний элемент теперь ссылается на новый
            tail = a;               //а в указатель на последний элемент записываем адрес нового элемента
        }
    }
 
    void printList()                //печатьсписка
    {
        ListElement t = head;       //получаемссылкунапервыйэлемент   
        while (t != null)           //пока элемент существуе
        {
            System.out.print(t.data + " "); //печатаемегоданные
            t = t.next;                     //и переключаемся на следующий
        }
    }
 
    void delEl(int data)          //удалениеэлемента
    {
        if(head == null)        //если список пуст - 
            return;             //ничего не делаем
 
        if (head == tail) {     //если список состоит из одного элемента
            head = null;        //очищаем указатели начала и конца
            tail = null;
            return;             //ивыходим
        }
 
        if (head.data == data) {    //если первый элемент - тот, что нам нужен
            head = head.next;       //переключаем указатель начала на второй элемент
            return;                 //и выходим
        }
 
        ListElementt = head;       //иначе начинаем искать
        while(t.next != null) {    //пока следующий элемент существует
            if (t.next.data == data) {  //проверяем следующий элемент
                if(tail == t.next)      //если он последний
                {
                    tail = t;           //то переключаем указатель на последний элемент на текущий
                }
                t.next = t.next.next;   //найденныйэлементвыкидываем
                return;                 //и выходим
            }
            t = t.next;                //иначе ищем дальше
        }
    }
}