import { observable, computed, action, useStrict } from "mobx"

useStrict(true)

export default class MovieStore{
    @observable
    start = 0;

    @observable
    count = 3;

    @observable
    state;

    @observable
    rows =[];

    @observable
    total =0;
}